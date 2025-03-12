import type { StateCreator } from 'zustand';

import type { NodeSlice } from './node';

export interface SelectionSlice {
    selectedId: string | null;
    selectionActions: {
        select: (id: string | null) => void;
        deselect: () => void;
    };
}

export const createSelectionSlice: StateCreator<
    SelectionSlice & NodeSlice,
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
