export type NetworkType = 'region' | 'vpc' | 'subnet' | 'securityGroup';

export interface Resource {
    id: string;
    networks: Record<NetworkType, any>;
    properties: Record<string, string>;
}
