import type { ResourceSVGConfig } from '../types/resource';

export const ServerSVGConfig: ResourceSVGConfig = {
    size: {
        '2d': {
            cols: 1,
            rows: 1,
        },
        '3d': {
            cols: 1,
            rows: 1,
            depth: 0.5,
        },
    },
};

export const ContainerSVGConfig: ResourceSVGConfig = {
    size: {
        '2d': {
            cols: 3,
            rows: 3,
        },
        '3d': {
            cols: 3,
            rows: 3,
            depth: 0.25,
        },
    },
};
