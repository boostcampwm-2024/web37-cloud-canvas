import _ from 'lodash';
import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import type { GridPoint } from '@/shared/types/canvas';

import { calcParentSizeByChildren, calcChildrenPoints } from '../lib/layout';
import { sortNode } from '../lib/sort';

import type { Node } from './node.types';

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
    nodes: {},
};

const store = create<NodeStates & NodeActions>((set) => ({
    ...initialState,
    addNode: (node) =>
        set((state) => ({ nodes: { ...state.nodes, [node.id]: node } })),
    moveNode: (id, offset) =>
        set((state) => {
            const node = state.nodes[id];
            if (!node) return state;

            const children = (node.children ?? []).map((id) => state.nodes[id]);

            const updatedNodes = [node, ...children].map((child) => ({
                ...child,
                point: {
                    col: child.point.col + offset.col,
                    row: child.point.row + offset.row,
                },
            }));

            return {
                nodes: sortNode({
                    ...state.nodes,
                    ..._.keyBy(updatedNodes, 'id'),
                }),
            };
        }),
    addChildNode: (parentId, childId) =>
        set((state) => {
            const parent = state.nodes[parentId];
            if (!parent) return state;

            const children = _.uniq([childId, ...(parent.children ?? [])]).map(
                (id) => state.nodes[id],
            );

            const childrenPoints = calcChildrenPoints(parent, children);
            const updatedChildren = children.map((child, idx) => ({
                ...child,
                parent: parentId,
                point: childrenPoints[idx],
            }));

            const newSize = calcParentSizeByChildren(parent, updatedChildren);
            const updatedParent = {
                ...parent,
                children: updatedChildren.map((child) => child.id),
                size: {
                    '2d': { ..._.merge(parent.size['2d'], newSize) },
                    '3d': { ..._.merge(parent.size['3d'], newSize) },
                },
            };

            return {
                nodes: sortNode({
                    ...state.nodes,
                    [parentId]: updatedParent,
                    ..._.keyBy(updatedChildren, 'id'),
                }),
            };
        }),
    removeChildNode: (parentId, childId) =>
        set((state) => {
            const parent = state.nodes[parentId];
            if (!parent) return state;

            const children = _.without(parent.children, childId).map(
                (id) => state.nodes[id],
            );
            const childrenPoints = calcChildrenPoints(parent, children);
            const updatedChildren = children.map((child, idx) => ({
                ...child,
                parent: parentId,
                point: childrenPoints[idx],
            }));

            const newSize =
                children.length > 0
                    ? calcParentSizeByChildren(parent, updatedChildren)
                    : parent.size;
            const updatedParent = {
                ...parent,
                children: updatedChildren.map((child) => child.id),
                size: {
                    '2d': { ..._.merge(parent.size['2d'], newSize) },
                    '3d': { ..._.merge(parent.size['3d'], newSize) },
                },
            };

            const excludedChild = {
                ...state.nodes[childId],
                parent: undefined,
            };

            return {
                nodes: sortNode({
                    ...state.nodes,
                    [parentId]: updatedParent,
                    [childId]: excludedChild,
                    ..._.keyBy(updatedChildren, 'id'),
                }),
            };
        }),
}));

export const useNodeStore = createSelectors(store);
