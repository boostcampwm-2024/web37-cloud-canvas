import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { Group } from '@/entities/canvas/model/group.types';

import type { EdgeSlice } from './edge';
import type { NodeSlice } from './node';
import type { SelectionSlice } from './selection';

export interface GroupSlice {
    groups: Record<string, Group>;
    groupActions: {
        addGroup: (group: Omit<Group, 'id'>) => void;
    };
}

const mockGroup: Group = {
    id: 'mockGroup',
    position: {
        col: 1,
        row: 1,
    },
    size: {
        cols: 2,
        rows: 2,
    },
    childNodeIds: [],
    properties: {},
};

export const createGroupSlice: StateCreator<
    GroupSlice & NodeSlice & EdgeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    GroupSlice
> = (set) => ({
    groups: { mockGroup },
    groupActions: {
        addGroup: (group) =>
            set((state) => {
                const id = nanoid();
                state.groups[id] = {
                    ...group,
                    id,
                };
            }),
    },
});
