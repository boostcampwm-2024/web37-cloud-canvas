import type { StateCreator } from 'zustand';

import type { EdgeSlice } from './edge';
import type { GroupSlice } from './group';
import type { NodeSlice } from './node';

type SelectType = 'node' | 'group' | 'edge';

export interface SelectionSlice {
    selectedNodeId: string | null;
    selectedGroupId: string | null;
    selectedEdgeId: string | null;
    selectionActions: {
        select: (id: string, type: SelectType) => void;
        deselect: () => void;
    };
}

export const createSelectionSlice: StateCreator<
    SelectionSlice & NodeSlice & EdgeSlice & GroupSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    SelectionSlice
> = (set) => ({
    selectedNodeId: null,
    selectedGroupId: null,
    selectedEdgeId: null,
    selectionActions: {
        select: (id, type) =>
            set(() => {
                switch (type) {
                    case 'node':
                        return {
                            selectedNodeId: id,
                            selectedGroupId: null,
                            selectedEdgeId: null,
                        };
                    case 'group':
                        return {
                            selectedGroupId: id,
                            selectedNodeId: null,
                            selectedEdgeId: null,
                        };
                    case 'edge':
                        return {
                            selectedEdgeId: id,
                            selectedNodeId: null,
                            selectedGroupId: null,
                        };
                }
            }),
        deselect: () =>
            set(() => ({
                selectedNodeId: null,
                selectedGroupId: null,
                selectedEdgeId: null,
            })),
    },
});
