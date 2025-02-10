import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as ini from 'ini';
import { CredentialProviderChain } from './credentials/CredentialProviderChain';
import { ApiKeyCredentials } from './types';

export class Ncloud {
    private apiKey: ApiKeyCredentials | null = null;
    private credentials: ApiKeyCredentials | null = null;

    constructor(arg?: { accessKey?: string; secretKey?: string }) {
        const options = arg || {};
        const { accessKey, secretKey } = options;

        if (accessKey && secretKey) {
            this.apiKey = {
                accessKey,
                secretKey,
            };
        }
    }

    async init(): Promise<ApiKeyCredentials> {
        try {
            const creds =
                await new CredentialProviderChain().retrieveCredentials();
            this.credentials = creds;
            return creds;
        } catch (error) {
            throw error;
        }
    }

    private getConfigureFilePath(): string {
        return path.join(os.homedir(), '.ncloud', 'configure');
    }

    private readConfigureFile(): Record<string, string> {
        const configureFile = this.getConfigureFilePath();

        if (!fs.existsSync(configureFile)) {
            console.error(
                'Please check configure file (*inx : $HOME/.ncloud/configure , Windows : %HOME%₩.ncloud₩configure)',
            );
            return {};
        }
        return ini.parse(fs.readFileSync(this.getConfigureFilePath(), 'utf-8'));
    }

    keys(): ApiKeyCredentials {
        if (this.apiKey) {
            return this.apiKey;
        }
        const config = this.readConfigureFile();
        return {
            accessKey: config.ncloud_access_key_id,
            secretKey: config.ncloud_secret_access_key,
        };
    }
}
