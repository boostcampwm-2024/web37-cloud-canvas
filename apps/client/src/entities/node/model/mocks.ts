import {
    ContainerSVGConfig,
    ServerSVGConfig,
} from '@/shared/config/resource-svg';

import type { Node } from './node.types';

const mockNode1: Node = {
    id: `mock-node-1111`,
    point: { col: 0, row: 0 },
    properties: {
        type: 'server',
    },
    size: ServerSVGConfig.size,
};

const mockNode2: Node = {
    id: `mock-node-2222`,
    point: { col: 0, row: 0 },
    properties: {
        type: 'server',
    },
    size: ServerSVGConfig.size,
};

const mockNode3: Node = {
    id: `mock-node-3333`,
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

const mockNodes = [mockContainer, mockNode1, mockNode2, mockNode3];

export const initialMockNodes = mockNodes.reduce((nodes, curNode) => {
    return {
        ...nodes,
        [curNode.id]: curNode,
    };
}, {});
