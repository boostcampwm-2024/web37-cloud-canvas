import _ from 'lodash';
import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { Node } from '@/entities/canvas/model/node.types';

import type { GridPosition } from '@/shared/canvas/types';

import type { EdgeSlice } from './edge';
import type { GroupSlice } from './group';
import type { SelectionSlice } from './selection';

export interface NodeSlice {
    nodes: Record<string, Node>;
    nodeActions: {
        getNode: (nodeId: string) => Node | undefined;
        getNodes: (nodeIds: string[]) => Node[];
        addNode: (node: Omit<Node, 'id'>) => string;
        moveNode: (nodeId: string, offset: GridPosition) => void;
        removeNode: (nodeId: string) => void;
    };
}

const sortNode = (nodes: Record<string, Node>) => {
    const sortedNodes = _.sortBy(nodes, ['position.row', 'position.col']);

    return Object.fromEntries(sortedNodes.map((node) => [node.id, node]));
};

export const createNodeSlice: StateCreator<
    NodeSlice & EdgeSlice & SelectionSlice & GroupSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    NodeSlice
> = (set, get) => ({
    nodes: {},
    nodeActions: {
        getNode: (nodeId) => get().nodes[nodeId],
        getNodes: (nodeIds) => nodeIds.map((nodeId) => get().nodes[nodeId]),
        addNode: (node) => {
            const id = nanoid();
            set((state) => {
                state.nodes[id] = {
                    ...node,
                    id,
                };
            });
            return id;
        },
        moveNode: (nodeId, offset) =>
            set((state) => {
                const node = state.nodes[nodeId];
                if (!node) return state;

                node.position.col += offset.col;
                node.position.row += offset.row;

                state.nodes = sortNode(state.nodes);
            }),
        removeNode: (nodeId) =>
            set((state) => {
                const node = state.nodes[nodeId];
                const group = state.groups[node.groupId];
                group.childNodeIds = group.childNodeIds.filter(
                    (childNodeId) => childNodeId !== nodeId,
                );

                if (group.childNodeIds.length === 0) {
                    delete state.groups[node.groupId];
                }

                delete state.nodes[nodeId];
            }),
    },
});
