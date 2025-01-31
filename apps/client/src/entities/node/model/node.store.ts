import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import { GridPoint } from '@/shared/types/canvas';
import { nanoid } from 'nanoid';
import { Node } from './node.types';

interface NodeStates {
    nodes: Record<string, Node>;
}

interface NodeActions {
    addNode: (node: Node) => void;
    moveNode: (id: string, offset: GridPoint) => void;
}

const mockNode: Node = {
    id: `mock-node-${nanoid()}`,
    point: { col: 0, row: 0 },
};

const initialState: NodeStates = {
    nodes: {
        [mockNode.id]: mockNode,
    },
};

const store = create<NodeStates & NodeActions>((set) => ({
    ...initialState,
    addNode: (node) =>
        set((state) => ({ nodes: { ...state.nodes, [node.id]: node } })),
    moveNode: (id, point) =>
        set((state) => {
            const node = state.nodes[id];
            if (!node) return state;

            return {
                nodes: {
                    ...state.nodes,
                    [id]: {
                        ...node,
                        point: {
                            col: node.point.col + point.col,
                            row: node.point.row + point.row,
                        },
                    },
                },
            };
        }),
}));

export const useNodeStore = createSelectors(store);
