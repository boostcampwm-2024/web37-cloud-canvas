import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { Group } from '@/entities/canvas/model/group.types';

import type { EdgeSlice } from './edge';
import type { NodeSlice } from './node';
import type { SelectionSlice } from './selection';

export interface GroupSlice {
    groups: Record<string, Group>;
    groupActions: {
        addGroup: (group: Omit<Group, 'id'> & { id?: string }) => string;
        addChildNodeToGroup: (groupId: string, childNodeId: string) => void;
        isExistGroup: (groupId: string) => boolean;
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
    },
});
