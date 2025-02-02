import {
    ContainerSVGConfig,
    ServerSVGConfig,
} from '@/shared/config/resource-svg';

import type { Node } from './node.types';

const mockNode: Node = {
    id: `mock-node-1111`,
    point: { col: 0, row: 0 },
    properties: {
        type: 'server',
    },
    size: ServerSVGConfig.size,
};

const mockContainer: Node = {
    id: `mock-container-2222`,
    point: { col: 4, row: 4 },
    properties: {
        type: 'container',
    },
    droppable: true,
    size: ContainerSVGConfig.size,
};

const mockNodes = [mockContainer, mockNode];

export const initialMockNodes = mockNodes.reduce((nodes, curNode) => {
    return {
        ...nodes,
        [curNode.id]: curNode,
    };
}, {});
