import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface SelectionState {
    selectedId: string;
}

interface SelectionActions {
    select: (id: string) => void;
}

const store = create<SelectionState & SelectionActions>((set) => ({
    selectedId: '',
    select: (id) => set({ selectedId: id }),
}));

export const useSelectionStore = createSelectors(store);
