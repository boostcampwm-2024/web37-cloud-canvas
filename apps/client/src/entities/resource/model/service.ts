import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';

import type { ResourceType } from './types';

export class ResourceNode {
    static create(type: ResourceType) {
        switch (type) {
            case 'server': {
                return {
                    id: nanoid(),
                    position: {
                        col: 0,
                        row: 0,
                    },
                    size: {
                        rows: 1,
                        cols: 1,
                        depth: 0.5,
                    },
                    groupIds: [],
                    svg2D: dynamic(
                        () =>
                            import('../ui/server/svg-2d').then(
                                (module) => module.ServerSVG2D,
                            ),
                        { ssr: false },
                    ),
                    svg3D: dynamic(
                        () =>
                            import('../ui/server/svg-3d').then(
                                (module) => module.ServerSVG3D,
                            ),
                        { ssr: false },
                    ),
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
                    properties: {
                        type: 'server',
                        networks: {
                            region: '',
                            vpc: '',
                            subnet: '',
                            securityGroup: '',
                        },
                        properties: {},
                    },
                };
            }
            case 'object-storage': {
                return {
                    id: nanoid(),
                    position: {
                        col: 0,
                        row: 0,
                    },
                    size: {
                        rows: 1,
                        cols: 1,
                        // depth: 1.5,
                    },
                    groupIds: [],
                    svg2D: dynamic(
                        () =>
                            import('../ui/object-storage/svg-2d').then(
                                (module) => module.ObjectStorageSVG2D,
                            ),
                        { ssr: false },
                    ),
                    svg3D: dynamic(
                        () =>
                            import('../ui/object-storage/svg-3d').then(
                                (module) => module.ObjectStorageSVG3D,
                            ),
                        { ssr: false },
                    ),
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
                                position: { row: 0.5, col: 0 },
                            },

                            {
                                direction: 'top',
                                position: { row: 0, col: 0.5 },
                            },
                            {
                                direction: 'right',
                                position: { row: 0.5, col: 0.7 },
                            },
                            {
                                direction: 'bottom',
                                position: { row: 0.7, col: 0.5 },
                            },
                        ],
                    },
                    properties: {
                        type: 'object-storage',
                        networks: {
                            region: '',
                            vpc: '',
                            subnet: '',
                            securityGroup: '',
                        },
                        properties: {},
                    },
                };
            }
        }

        throw new Error('Resource type is not supported');
    }
}
