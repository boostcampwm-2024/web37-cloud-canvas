import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface SelectionState {
    selectedNodeId: string | null;
    selectedEdgeId: string | null;
}

interface SelectionActions {
    select: (id: string, type: 'node' | 'edge') => void;
    deselect: () => void;
}

const store = create<SelectionState & SelectionActions>((set) => ({
    selectedNodeId: null,
    selectedEdgeId: null,
    select: (id, type) =>
        set(() => {
            if (type === 'node') {
                return { selectedNodeId: id, selectedEdgeId: null };
            } else {
                return { selectedNodeId: null, selectedEdgeId: id };
            }
        }),
    deselect: () => set({ selectedNodeId: null, selectedEdgeId: null }),
}));

export const useSelectionStore = createSelectors(store);
