import type { SizeByViewMode } from '../types/canvas';

export const DefaultServerSVGSize: SizeByViewMode = {
    '2d': {
        cols: 1,
        rows: 1,
    },
    '3d': {
        cols: 1,
        rows: 1,
        depth: 0.5,
    },
};

export const DefaultContainerSVGSize: SizeByViewMode = {
    '2d': {
        cols: 3,
        rows: 3,
    },
    '3d': {
        cols: 3,
        rows: 3,
        depth: 0.25,
    },
};

export const DefaultCloudFunctionSVGSize: SizeByViewMode = {
    '2d': {
        cols: 1,
        rows: 1,
    },
    '3d': {
        cols: 1,
        rows: 1,
        depth: 1.25,
    },
};

export const DefaultAutoScalingSVGSize: SizeByViewMode = {
    '2d': {
        cols: 2,
        rows: 1,
    },
    '3d': {
        cols: 2,
        rows: 1,
        depth: 0,
    },
};
