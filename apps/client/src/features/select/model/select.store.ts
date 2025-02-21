import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface SelectStates {
    selectedNodeId: string | null;
    selectedEdgeId: string | null;
}

interface SelectActions {
    select: (id: string, type: 'node' | 'edge') => void;
    deselect: () => void;
}

interface SelectStore extends SelectStates {
    actions: SelectActions;
}

const store = create<SelectStore>()(
    devtools((set) => ({
        selectedNodeId: null,
        selectedEdgeId: null,
        actions: {
            select: (id, type) =>
                set(() => {
                    if (type === 'node') {
                        return { selectedNodeId: id, selectedEdgeId: null };
                    } else {
                        return { selectedNodeId: null, selectedEdgeId: id };
                    }
                }),
            deselect: () => set({ selectedNodeId: null, selectedEdgeId: null }),
        },
    })),
);

export const useSelectStore = createSelectors(store);
