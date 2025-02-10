import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { ApiKeyCredentials, CredentialProvider } from '../types';

export class ConfigFileCredentials implements CredentialProvider {
    private loaded = false;
    private credentials: ApiKeyCredentials | null = null;
    public readonly providerName = 'ConfigFileCredentials';
    private readonly configureFilePath: string;

    constructor() {
        this.configureFilePath = path.join(
            os.homedir(),
            '.ncloud',
            'configure'
        );
    }

    async loadCredentials(): Promise<ApiKeyCredentials | null> {
        if (!fs.existsSync(this.configureFilePath)) {
            throw new Error('Please check configure file (*inx : $HOME/.ncloud/configure , Windows : %HOME%₩.ncloud₩configure)');
        }

        const config = this.parseConfigFile(
            fs.readFileSync(this.configureFilePath, 'utf-8')
        );

        if (!config.ncloud_access_key_id || !config.ncloud_secret_access_key) {
            throw new Error(`Failed to load credentials from the ${this.configureFilePath} file`);
        }

        this.loaded = true;
        this.credentials = {
            accessKey: config.ncloud_access_key_id,
            secretKey: config.ncloud_secret_access_key,
            provider: this
        };

        return this.credentials;
    }

    private parseConfigFile(content: string): Record<string, string> {
        const config: Record<string, string> = {};
        const lines = content.split('\n');

        for (const line of lines) {
            const [key, value] = line.split('=').map(part => part.trim());
            if (key && value) {
                config[key] = value;
            }
        }

        return config;
    }

    private needsToLoadCredentials(): boolean {
        return !this.loaded || !this.credentials;
    }
}