export type NetworkType = 'region' | 'vpc' | 'subnet' | 'securityGroup';

export interface Resource {
    id: string;
    networks: Record<NetworkType, string>;
    properties: Record<string, string>;
}
