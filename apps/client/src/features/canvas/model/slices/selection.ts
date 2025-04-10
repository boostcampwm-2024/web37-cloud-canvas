import type { StateCreator } from 'zustand';

import type { EdgeSlice } from './edge';
import type { GroupSlice } from './group';
import type { NodeSlice } from './node';

export interface SelectionSlice {
    selectedId: string | null;
    selectionActions: {
        select: (id: string | null) => void;
        deselect: () => void;
    };
}

export const createSelectionSlice: StateCreator<
    SelectionSlice & NodeSlice & EdgeSlice & GroupSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    SelectionSlice
> = (set) => ({
    selectedId: null,
    selectionActions: {
        select: (id: string | null) => set(() => ({ selectedId: id })),
        deselect: () => set(() => ({ selectedId: null })),
    },
});
