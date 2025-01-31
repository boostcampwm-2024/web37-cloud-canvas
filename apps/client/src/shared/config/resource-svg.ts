import { GridSize2D, GridSize3D } from '../types/canvas';

interface ResourceSVGConfig {
    size: {
        '2d': GridSize2D;
        '3d': GridSize3D;
    };
}

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
