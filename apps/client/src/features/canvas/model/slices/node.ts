import _ from 'lodash';
import type { StateCreator } from 'zustand';

import type { Node } from '@/entities/node/model/types';

import type { GridPosition } from '@/shared/canvas/types';

import type { SelectionSlice } from './selection';

export interface NodeSlice {
    nodes: Record<string, Node>;
    nodeActions: {
        getNode: (nodeId: string) => Node | undefined;
        addNode: (node: Node) => void;
        moveNode: (nodeId: string, offset: GridPosition) => void;
    };
}

const sortNode = (nodes: Record<string, Node>) => {
    const sortedNodes = _.sortBy(nodes, ['position.row', 'position.col']);

    return Object.fromEntries(sortedNodes.map((node) => [node.id, node]));
};

export const createNodeSlice: StateCreator<
    NodeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    NodeSlice
> = (set, get) => ({
    nodes: {},
    nodeActions: {
        getNode: (nodeId) => get().nodes[nodeId],
        addNode: (node) =>
            set((state) => {
                state.nodes[node.id] = node;
            }),
        moveNode: (nodeId, offset) =>
            set((state) => {
                const node = state.nodes[nodeId];
                if (!node) return state;

                node.position.col += offset.col;
                node.position.row += offset.row;

                state.nodes = sortNode(state.nodes);
            }),
    },
});
