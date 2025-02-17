import type { ResourceSVGConfig } from '../types/resource';

export const DefaultServerSVGConfig: ResourceSVGConfig = {
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
    connectors: {
        '2d': [
            {
                direction: 'left',
                point: { col: 0, row: 0.5 },
            },
            {
                direction: 'top',
                point: { col: 0.5, row: 0 },
            },
            {
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
            {
                direction: 'bottom',
                point: { col: 0.5, row: 1 },
            },
        ],
        '3d': [
            {
                direction: 'left',
                point: { row: 0.5, col: -0.5 },
            },

            {
                direction: 'top',
                point: { row: -0.5, col: 0.5 },
            },
            {
                direction: 'right',
                point: { row: 0.5, col: 1.0 },
            },
            {
                direction: 'bottom',
                point: { row: 1, col: 0.5 },
            },
        ],
    },
};

export const DefaultContainerSVGConfig: ResourceSVGConfig = {
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
    connectors: {
        '2d': [
            {
                direction: 'left',
                point: { col: 0, row: 1.5 },
            },
            {
                direction: 'top',
                point: { col: 1.5, row: 0 },
            },
            {
                direction: 'right',
                point: { col: 3, row: 1.5 },
            },
            {
                direction: 'bottom',
                point: { col: 1.5, row: 3 },
            },
        ],
        '3d': [
            {
                direction: 'left',
                point: { col: -0.25, row: 1.5 },
            },
            {
                direction: 'top',
                point: { col: 1.5, row: -0.25 },
            },
            {
                direction: 'right',
                point: { col: 3, row: 1.5 },
            },
            {
                direction: 'bottom',
                point: { col: 1.5, row: 3 },
            },
        ],
    },
};

export const DefaultCloudFunctionSVGConfig: ResourceSVGConfig = {
    size: {
        '2d': {
            cols: 1,
            rows: 1,
        },
        '3d': {
            cols: 1,
            rows: 1,
            depth: 1.25,
        },
    },
    connectors: {
        '2d': [
            {
                direction: 'left',
                point: { col: 0, row: 0.5 },
            },
            {
                direction: 'top',
                point: { col: 0.5, row: 0 },
            },
            {
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
            {
                direction: 'bottom',
                point: { col: 0.5, row: 1 },
            },
        ],
        '3d': [
            {
                direction: 'left',
                point: { row: 0.5, col: -0.25 },
            },

            {
                direction: 'top',
                point: { row: -0.25, col: 0.5 },
            },
            {
                direction: 'right',
                point: { row: 0.5, col: 1.0 },
            },
            {
                direction: 'bottom',
                point: { row: 1, col: 0.5 },
            },
        ],
    },
};

export const DefaultAutoScalingSVGConfig: ResourceSVGConfig = {
    size: {
        '2d': {
            cols: 2,
            rows: 1,
        },
        '3d': {
            cols: 2,
            rows: 1,
            depth: 0,
        },
    },
    connectors: {
        '2d': [
            {
                direction: 'top',
                point: { col: 1, row: -0.25 },
            },
            {
                direction: 'bottom',
                point: { col: 1, row: 1.25 },
            },
        ],
        '3d': [
            {
                direction: 'top',
                point: { col: 1, row: -0.25 },
            },
            {
                direction: 'bottom',
                point: { col: 1, row: 1.25 },
            },
        ],
    },
};

export const DefaultObjectStorageSVGConfig: ResourceSVGConfig = {
    size: {
        '2d': {
            cols: 1,
            rows: 1,
        },
        '3d': {
            cols: 1,
            rows: 1,
            depth: 1.25,
        },
    },
    connectors: {
        '2d': [
            {
                direction: 'left',
                point: { col: 0, row: 0.5 },
            },
            {
                direction: 'top',
                point: { col: 0.5, row: 0 },
            },
            {
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
            {
                direction: 'bottom',
                point: { col: 0.5, row: 1 },
            },
        ],
        '3d': [
            {
                direction: 'left',
                point: { row: 0.5, col: 0 },
            },

            {
                direction: 'top',
                point: { row: 0, col: 0.5 },
            },
            {
                direction: 'right',
                point: { row: 0.5, col: 0.75 },
            },
            {
                direction: 'bottom',
                point: { row: 0.75, col: 0.5 },
            },
        ],
    },
};
