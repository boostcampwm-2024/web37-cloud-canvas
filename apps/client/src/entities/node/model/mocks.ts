import { nanoid } from 'nanoid/non-secure';

import type { Node } from './node.types';

const mockNode: Node = {
    id: `mock-node-${nanoid()}`,
    point: { col: 0, row: 0 },
    properties: {
        type: 'server',
    },
};

const mockContainer: Node = {
    id: `mock-container-${nanoid()}`,
    point: { col: 4, row: 4 },
    properties: {
        type: 'container',
    },
};

const mockNodes = [mockNode, mockContainer];

export const initialMockNodes = mockNodes.reduce((nodes, curNode) => {
    return {
        ...nodes,
        [curNode.id]: curNode,
    };
}, {});
