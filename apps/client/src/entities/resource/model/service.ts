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
                        depth: 1.5,
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
