import { EnvironmentCredentials } from './EnvironmentCredentials';
import { ConfigFileCredentials } from './ConfigFileCredentials';
import { ServerRoleCredentials } from './ServerRoleCredentials';
import { ApiKeyCredentials, CredentialProvider } from '../types';

export class CredentialProviderChain {
    private readonly defaultCredentialsProvider: CredentialProvider[];

    constructor() {
        this.defaultCredentialsProvider = [
            new EnvironmentCredentials(),
            new ConfigFileCredentials(),
            new ServerRoleCredentials()
        ];
    }

    async retrieveCredentials(): Promise<ApiKeyCredentials> {
        return this.retrieve(this.defaultCredentialsProvider);
    }

    private async retrieve(providers: CredentialProvider[]): Promise<ApiKeyCredentials> {
        for (const provider of providers) {
            try {
                const creds = await provider.loadCredentials();
                if (creds) {
                    return creds;
                }
            } catch (error) {
                console.debug(`Failed to load credentials from ${provider.providerName}:`, error);
                continue;
            }
        }
        throw new Error('Unable to load credentials from any provider');
    }
}