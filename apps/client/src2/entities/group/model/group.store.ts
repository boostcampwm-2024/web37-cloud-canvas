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
    isGroupExist: (groupId: string) => boolean;
    getGroups: (groupIds: Array<string>) => Group[];
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
            isGroupExist: (groupId) => get().groups[groupId],
            getGroups: (groupIds) => {
                return groupIds.map((id) => get().groups[id]);
            },
            createGroup: (group: Group) => {
                set((state) => {
                    return {
                        ...state,
                        groups: {
                            ...state.groups,
                            [group.id]: {
                                ...group,
                            },
                        },
                    };
                });
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
                            nodeIds: [...state.groups[groupId].nodeIds, nodeId],
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
                            nodeIds: _.without(
                                state.groups[groupId].nodeIds,
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
