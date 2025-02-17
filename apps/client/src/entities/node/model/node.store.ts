import _ from 'lodash';
import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import type { GridPoint } from '@/shared/types/canvas';
import type { DropLayoutType } from '@/shared/types/resource';

import { calcParentSizeByChildren, calcChildrenPoints } from '../lib/layout';
import { sortNode } from '../lib/sort';

import type { Node } from './node.types';

interface NodeStates {
    nodes: Record<string, Node>;
}

interface NodeActions {
    addNode: (node: Node) => void;
    removeNode: (id: string) => Array<string> | null;
    moveNode: (id: string, offset: GridPoint) => void;
    addChildNode: (parentId: string, childId: string) => void;
    removeChildNode: (parentId: string, childId: string) => void;
    updateNodeLayout: (
        id: string,
        options: {
            layoutType: DropLayoutType;
            padding: number;
        },
    ) => void;
    getNode: (id: string) => Node | null;
}

interface NodeStore extends NodeStates {
    actions: NodeActions;
}

const initialState: NodeStates = {
    nodes: {},
};

const store = create<NodeStore>((set, get) => ({
    ...initialState,
    actions: {
        getNode: (id) => get().nodes[id],
        addNode: (node) =>
            set((state) => ({ nodes: { ...state.nodes, [node.id]: node } })),
        removeNode: (id) => {
            const node = get().nodes[id];
            if (!node) return null;
            const { nodes } = get();

            const removedNodes = [id, ...(node.children ?? [])];
            const updatedNodes = _.omitBy(nodes, (node) =>
                removedNodes.includes(node.id),
            );
            if (node.parent) {
                const parentNode = nodes[node.parent];
                updatedNodes[parentNode.id] = {
                    ...parentNode,
                    children: _.without(parentNode.children, node.id),
                };
            }

            set({ nodes: updatedNodes });

            return removedNodes;
        },
        moveNode: (id, offset) =>
            set((state) => {
                const node = state.nodes[id];
                if (!node) return state;

                const children = (node.children ?? []).map(
                    (id) => state.nodes[id],
                );

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
                if (!parent || parent.children?.includes(childId)) return state;

                const children = _.uniq([
                    childId,
                    ...(parent.children ?? []),
                ]).map((id) => state.nodes[id]);

                return {
                    nodes: sortNode({
                        ...state.nodes,
                        [parentId]: {
                            ...parent,
                            children: children.map((child) => child.id),
                        },
                        [childId]: {
                            ...state.nodes[childId],
                            parent: parentId,
                        },
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

                return {
                    nodes: sortNode({
                        ...state.nodes,
                        [parentId]: {
                            ...parent,
                            children: children.map((child) => child.id),
                        },
                        [childId]: {
                            ...state.nodes[childId],
                            parent: undefined,
                        },
                    }),
                };
            }),
        updateNodeLayout: (id, { layoutType, padding }) =>
            set((state) => {
                const node = state.nodes[id];
                if (!node) return state;

                const children = (node.children ?? []).map(
                    (id) => state.nodes[id],
                );
                const childrenPoints = calcChildrenPoints(
                    node,
                    children,
                    layoutType,
                    padding,
                );
                const updatedChildren = children.map((child, idx) => ({
                    ...child,
                    parent: node.id,
                    point: childrenPoints[idx],
                }));

                const newSize =
                    children.length > 0
                        ? calcParentSizeByChildren(
                              updatedChildren,
                              layoutType,
                              padding,
                          )
                        : node.size;
                const updatedParent = {
                    ...node,
                    children: updatedChildren.map((child) => child.id),
                    size: {
                        '2d': { ..._.merge(node.size['2d'], newSize) },
                        '3d': { ..._.merge(node.size['3d'], newSize) },
                    },
                };

                return {
                    nodes: sortNode({
                        ...state.nodes,
                        [id]: updatedParent,
                        ..._.keyBy(updatedChildren, 'id'),
                    }),
                };
            }),
    },
}));

export const useNodeStore = createSelectors(store);
