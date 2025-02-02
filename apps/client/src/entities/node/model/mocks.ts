import { nanoid } from 'nanoid/non-secure';

import type { Node } from './node.types';

const mockNode: Node = {
    id: `mock-node-1111`,
    point: { col: 0, row: 0 },
    properties: {
        type: 'server',
    },
};

const mockContainer: Node = {
    id: `mock-container-2222`,
    point: { col: 4, row: 4 },
    properties: {
        type: 'container',
    },
    droppable: true,
};

const mockNodes = [mockContainer, mockNode];

export const initialMockNodes = mockNodes.reduce((nodes, curNode) => {
    return {
        ...nodes,
        [curNode.id]: curNode,
    };
}, {});
