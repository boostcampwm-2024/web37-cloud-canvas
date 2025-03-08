import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';

import type { Node } from './canvas.types';

export const DefaultServerSVGConfig = {
    type: 'server' as const,
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
                position: { col: 0, row: 0.5 },
            },
            {
                direction: 'top',
                position: { col: 0.5, row: 0 },
            },
            {
                direction: 'right',
                position: { col: 1, row: 0.5 },
            },
            {
                direction: 'bottom',
                position: { col: 0.5, row: 1 },
            },
        ],
        '3d': [
            {
                direction: 'left',
                position: { row: 0.5, col: -0.5 },
            },

            {
                direction: 'top',
                position: { row: -0.5, col: 0.5 },
            },
            {
                direction: 'right',
                position: { row: 0.5, col: 1.0 },
            },
            {
                direction: 'bottom',
                position: { row: 1, col: 0.5 },
            },
        ],
    },
    groupIds: [],
    svg2D: dynamic(() => import('../ui/svg/Server/Svg2D'), {
        ssr: false,
    }),
    svg3D: dynamic(() => import('../ui/svg/Server/Svg3D'), {
        ssr: false,
    }),
    properties: {},
};

export const createResourceNode = (type: 'server'): Node => {
    const id = `node-${nanoid()}`;
    const defaultPosition = {
        col: 0,
        row: 0,
    };

    switch (type) {
        case 'server':
            return {
                id,
                position: defaultPosition,
                ...DefaultServerSVGConfig,
            };
    }
};
