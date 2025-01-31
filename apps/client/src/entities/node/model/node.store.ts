import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import { Node } from './node.types';

interface NodeStates {
    nodes: Record<string, Node>;
}

interface NodeActions {
    addNode: (node: Node) => void;
}

const initialState: NodeStates = {
    nodes: {},
};

const store = create<NodeStates & NodeActions>((set) => ({
    ...initialState,
    addNode: (node) =>
        set((state) => ({ nodes: { ...state.nodes, [node.id]: node } })),
}));

export const useNodeStore = createSelectors(store);
