import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface Select {
    selectedNodeId: string | null;
    selectedEdgeId: string | null;
}

interface SelectActions {
    select: (id: string, type: 'node' | 'edge') => void;
    deselect: () => void;
}

const store = create<Select & SelectActions>((set) => ({
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

export const useSelectStore = createSelectors(store);
