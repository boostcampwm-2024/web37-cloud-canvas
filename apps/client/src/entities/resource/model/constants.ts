import type { ResourceType } from './types';

export interface ResourceCategory {
    title: string;
    resources: Array<{
        title: string;
        type: ResourceType;
    }>;
}

export const RESOURCE_CATEGRIES: Array<ResourceCategory> = [
    {
        title: 'Compute',
        resources: [
            { type: 'server', title: 'Server' },
            // { type: 'cloud-function', title: 'Cloud Function' },
            // { type: 'auto-scaling', title: 'Auto Scaling' },
        ],
    },
    // {
    //     title: 'Container',
    //     resources: [
    //         { type: 'container', title: 'Container Registry' },
    //         { type: 'kubernetes', title: 'Kubernetes' },
    //     ],
    // },
    // {
    //     title: 'Storage',
    //     resources: [{ type: 'object-storage', title: 'Object Storage' }],
    // },
    // {
    //     title: 'Database',
    //     resources: [
    //         { type: 'mysql', title: 'MySQL' },
    //         { type: 'redis', title: 'Redis' },
    //         { type: 'mssql', title: 'MSSQL' },
    //         { type: 'mongodb', title: 'MongoDB' },
    //         { type: 'postgresql', title: 'PostgreSQL' },
    //     ],
    // },
];
