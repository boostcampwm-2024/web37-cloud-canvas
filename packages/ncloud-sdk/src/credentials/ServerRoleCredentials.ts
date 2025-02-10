import axios from 'axios';
import { ApiKeyCredentials, CredentialProvider } from '../types';

export class ServerRoleCredentials implements CredentialProvider {
    private loaded = false;
    private credentials: ApiKeyCredentials & { expiration?: string } | null = null;
    private readonly metadataEndpoint: string;
    private readonly credentialsUrl = '/latest/meta-data/iam/security-credentials/';
    private readonly metadataTimeout = 3000;
    public readonly providerName = 'ServerRoleCredentials';

    constructor() {
        this.metadataEndpoint = process.env['NCLOUD_METADATA_ENDPOINT'] || 'http://169.254.169.254';
    }

    async loadCredentials(): Promise<ApiKeyCredentials | null> {
        if (!this.needsToLoadCredentials()) {
            return this.credentials;
        }

        try {
            const roleResponse = await axios.get(
                `${this.metadataEndpoint}${this.credentialsUrl}`,
                { timeout: this.metadataTimeout }
            );
            const roleId = roleResponse.data;

            const credsResponse = await axios.get(
                `${this.metadataEndpoint}${this.credentialsUrl}${roleId}`,
                {
                    timeout: this.metadataTimeout,
                    headers: { Accept: 'application/json' }
                }
            );

            const creds = credsResponse.data;
            if (!creds.AccessKeyId || !creds.SecretAccessKey || !creds.Expiration) {
                throw new Error(`Failed to decode ${roleId} server role credentials`);
            }

            this.loaded = true;
            this.credentials = {
                accessKey: creds.AccessKeyId,
                secretKey: creds.SecretAccessKey,
                expiration: creds.Expiration,
                provider: this
            };

            return this.credentials;
        } catch (error) {
            throw new Error('Failed to read server role from metadata api');
        }
    }

    private needsToLoadCredentials(): boolean {
        return !this.loaded || !this.valid() || this.expired();
    }

    private valid(): boolean {
        return !!(this.credentials?.accessKey && this.credentials?.secretKey && this.credentials?.expiration);
    }

    private expired(): boolean {
        if (!this.credentials?.expiration) return true;
        const currentTime = new Date().getTime();
        const expireTime = new Date(this.credentials.expiration).getTime();
        return expireTime < currentTime;
    }
}