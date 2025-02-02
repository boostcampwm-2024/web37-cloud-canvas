import _ from 'lodash';

import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import { GridPoint } from '@/shared/types/canvas';
import {
    calcParentSizeByChildren,
    calcChildrenLayout,
} from '../lib/node-layout';
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

            const children = _.compact(
                parent.children?.map((id) => state.nodes[id]),
            ).concat(state.nodes[childId]);

            const childrenLayout = calcChildrenLayout(parent, children);
            const updatedChildren = children.map((child, idx) => ({
                ...child,
                parent: parentId,
                ...childrenLayout[idx],
            }));

            const newSize = calcParentSizeByChildren(updatedChildren);
            const updatedParent = {
                ...parent,
                children: updatedChildren.map((child) => child.id),
                size: {
                    '2d': _.merge(parent.size['2d'], newSize),
                    '3d': _.merge(parent.size['3d'], newSize),
                },
            };

            return {
                nodes: {
                    ...state.nodes,
                    [parentId]: updatedParent,
                    ..._.keyBy(updatedChildren, 'id'),
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
