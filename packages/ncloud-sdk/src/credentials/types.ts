export interface ApiKeyCredentials {
    accessKey?: string;
    secretKey?: string;
    provider?: CredentialProvider;
    expiration?: string;
}

export interface CredentialProvider {
    readonly providerName: string;
    loadCredentials(): Promise<ApiKeyCredentials | null>;
}