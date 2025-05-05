import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { Group } from '@/entities/canvas/model/group.types';

import type { GridPosition } from '@/shared/canvas/types';

import type { EdgeSlice } from './edge';
import type { NodeSlice } from './node';
import type { SelectionSlice } from './selection';

export interface GroupSlice {
    groups: Record<string, Group>;
    groupActions: {
        addGroup: (group: Omit<Group, 'id'> & { id?: string }) => string;
        addChildNodeToGroup: (groupId: string, childNodeId: string) => void;
        isExistGroup: (groupId: string) => boolean;
        moveGroup: (groupId: string, offset: GridPosition) => void;
        removeGroup: (groupId: string) => void;
    };
}

export const createGroupSlice: StateCreator<
    GroupSlice & NodeSlice & EdgeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    GroupSlice
> = (set, get) => ({
    groups: {},
    groupActions: {
        addGroup: (group) => {
            const id = group.id ?? nanoid();
            set((state) => {
                state.groups[id] = {
                    ...group,
                    id,
                };
            });
            return id;
        },
        addChildNodeToGroup: (groupId, childId) =>
            set((state) => {
                const group = state.groups[groupId];
                if (!group) return;

                group.childNodeIds.push(childId);
            }),
        isExistGroup: (groupId) => get().groups[groupId] !== undefined,
        moveGroup: (groupId, offset) =>
            set((state) => {
                const group = state.groups[groupId];
                if (!group) return state;

                const edgeSet = new Set<string>();
                group.childNodeIds.forEach((nodeId) => {
                    const node = state.nodes[nodeId];
                    if (!node) return;

                    node.position.col += offset.col;
                    node.position.row += offset.row;

                    Object.values(state.edges).forEach((edge) => {
                        if (
                            edge.sourceNodeId === nodeId ||
                            edge.targetNodeId === nodeId
                        ) {
                            edgeSet.add(edge.id);
                        }
                    });
                });

                edgeSet.forEach((edgeId) => {
                    state.edges[edgeId].bezierPoint.forEach((point) => {
                        point.col += offset.col;
                        point.row += offset.row;
                    });
                });
            }),
        removeGroup: (groupId) =>
            set((state) => {
                const group = state.groups[groupId];
                if (group.childNodeIds.length > 0) return;
                delete state.groups[groupId];
            }),
    },
});
