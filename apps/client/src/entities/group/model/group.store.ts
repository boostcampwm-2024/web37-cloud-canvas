import _ from 'lodash';

import { create } from 'zustand';
import { Group } from './group.types';
import { devtools } from 'zustand/middleware';
import { createSelectors } from '@/shared/lib/zustand/selector';

interface GroupStates {
    groups: Record<string, Group>;
}

interface GroupActions {
    createGroup: (group: Partial<Group>) => void;
    removeGroup: (groupId: string) => void;
    addNodeToGroup: (nodeId: string, groupId: string) => void;
    removeNodeFromGroup: (nodeId: string, groupId: string) => void;
}

interface GroupStore extends GroupStates {
    actions: GroupActions;
}

const initialState: GroupStates = {
    groups: {},
};

const store = create<GroupStore>()(
    devtools((set, get) => ({
        ...initialState,
        actions: {
            createGroup: (group: Group) => {
                set((state) => ({
                    ...state,
                    groups: {
                        ...state.groups,
                        [group.id]: {
                            ...group,
                            children: [],
                        },
                    },
                }));
            },
            removeGroup: (groupId: string) => {
                set((state) => ({
                    ...state,
                    groups: Object.fromEntries(
                        Object.entries(state.groups).filter(
                            ([id]) => id !== groupId,
                        ),
                    ),
                }));
            },
            addNodeToGroup: (nodeId: string, groupId: string) => {
                set((state) => ({
                    groups: {
                        ...state.groups,
                        [groupId]: {
                            ...state.groups[groupId],
                            children: [
                                ...state.groups[groupId].children,
                                nodeId,
                            ],
                        },
                    },
                }));
            },
            removeNodeFromGroup: (nodeId: string, groupId: string) => {
                set((state) => ({
                    groups: {
                        ...state.groups,
                        [groupId]: {
                            ...state.groups[groupId],
                            children: _.without(
                                state.groups[groupId].children,
                                nodeId,
                            ),
                        },
                    },
                }));
            },
        },
    })),
);

export const useGroupStore = createSelectors(store);
