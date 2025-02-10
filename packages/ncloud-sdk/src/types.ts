export interface ApiKeyCredentials {
    accessKey?: string;
    secretKey?: string;
}

export interface RequestConfig {
    method: string;
    url: string;
    timestamp: number;
    params?: Record<string, any>;
}

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
