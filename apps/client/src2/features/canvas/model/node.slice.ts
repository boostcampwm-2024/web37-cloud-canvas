import type { StateCreator } from 'zustand';
import { Node } from './canvas.types';

export interface NodeSlice {
    nodes: Record<string, Node>;

    nodeActions: {
        addNode: (node: Node) => void;
    };
}
export const createNodeSlice: StateCreator<NodeSlice> = (set) => ({
    nodes: {},
    nodeActions: {
        addNode: (node: Node) =>
            set((state) => ({ nodes: { ...state.nodes, [node.id]: node } })),
        removeNode: () => {},
    },
});
