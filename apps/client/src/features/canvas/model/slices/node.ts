import type { StateCreator } from 'zustand';

import type { Node } from '@/entities/node/model/types';

export interface NodeSlice {
    nodes: Record<string, Node>;
    nodeActions: {
        addNode: (node: Node) => void;
    };
}

export const createNodeSlice: StateCreator<
    NodeSlice & any,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    NodeSlice
> = (set) => ({
    nodes: {},
    nodeActions: {
        addNode: (node: Node) =>
            set((state: NodeSlice) => {
                state.nodes[node.id] = node;
            }),
        removeNode: () => {},
    },
});
