import _ from 'lodash';

import { create } from 'zustand';

import { getCenterGridPoint } from '@/shared/lib/canvas/svg';
import { createSelectors } from '@/shared/lib/zustand/selector';
import { GridPoint } from '@/shared/types/canvas';
import { initialMockNodes } from './mocks';
import { Node } from './node.types';

interface NodeStates {
    nodes: Record<string, Node>;
}

interface NodeActions {
    addNode: (node: Node) => void;
    moveNode: (id: string, offset: GridPoint) => void;
    addChildNode: (parentId: string, childId: string) => void;
    removeChildNode: (parentId: string, childId: string) => void;
}

const initialState: NodeStates = {
    nodes: initialMockNodes,
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
    addChildNode: (parentId, childId) =>
        set((state) => {
            const parent = state.nodes[parentId];
            if (!parent) return state;

            //INFO: container size는 2d, 3d 동일
            const centerPoint = getCenterGridPoint(
                parent.point,
                parent.size['2d'],
            );

            return {
                nodes: {
                    ...state.nodes,
                    [parentId]: {
                        ...parent,
                        children: [...(parent.children || []), childId],
                    },
                    [childId]: {
                        ...state.nodes[childId],
                        parent: parentId,
                        point: centerPoint,
                    },
                },
            };
        }),
    removeChildNode: (parentId, childId) =>
        set((state) => {
            const parent = state.nodes[parentId];
            if (!parent) return state;

            return {
                nodes: {
                    ...state.nodes,
                    [parentId]: {
                        ...parent,
                        children: _.without(parent.children, childId),
                    },
                    [childId]: {
                        ...state.nodes[childId],
                        parent: undefined,
                    },
                },
            };
        }),
}));

export const useNodeStore = createSelectors(store);
