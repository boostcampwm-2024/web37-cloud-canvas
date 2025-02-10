import { ApiKeyCredentials, CredentialProvider } from '../types';

export class EnvironmentCredentials implements CredentialProvider {
    private loaded = false;
    private credentials: ApiKeyCredentials | null = null;
    private readonly envPrefix = 'NCLOUD_';

    public readonly providerName = 'EnvironmentCredentials';

    async loadCredentials(): Promise<ApiKeyCredentials | null> {
        if (!this.needsToLoadCredentials()) {
            return this.credentials;
        }

        if (!process || !process.env) {
            throw new Error('No process info or environment variables available');
        }

        const accessKey = process.env[`${this.envPrefix}ACCESS_KEY_ID`] ||
            process.env[`${this.envPrefix}ACCESS_KEY`];

        if (!accessKey) {
            throw new Error(`Variable ${this.envPrefix}ACCESS_KEY_ID not set.`);
        }

        const secretKey = process.env[`${this.envPrefix}SECRET_ACCESS_KEY`] ||
            process.env[`${this.envPrefix}SECRET_KEY`];

        if (!secretKey) {
            throw new Error(`Variable ${this.envPrefix}SECRET_ACCESS_KEY not set.`);
        }

        this.loaded = true;
        this.credentials = {
            accessKey,
            secretKey,
            provider: this
        };

        return this.credentials;
    }

    private needsToLoadCredentials(): boolean {
        return !this.loaded || !this.credentials;
    }
}