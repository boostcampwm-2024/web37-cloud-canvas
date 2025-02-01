import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface DragNodeStore {
    draggedId: string | null;
    setDraggedId: (draggedId: string | null) => void;
}

const store = create<DragNodeStore>((set) => ({
    draggedId: null,
    setDraggedId: (draggedId) => set({ draggedId }),
}));

export const useDragNodeStore = createSelectors(store);
