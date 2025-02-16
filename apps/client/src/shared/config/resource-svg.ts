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
                direction: 'left',
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
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
        ],
        '3d': [],
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
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
        ],
        '3d': [],
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
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
        ],
        '3d': [],
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
                direction: 'right',
                point: { col: 1, row: 0.5 },
            },
        ],
        '3d': [],
    },
};
