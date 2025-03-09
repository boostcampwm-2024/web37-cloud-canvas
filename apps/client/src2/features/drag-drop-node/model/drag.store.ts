import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface DragStore {
    draggedId: string | null;
    setDraggedId: (draggedId: string | null) => void;
}

const store = create<DragStore>((set) => ({
    draggedId: null,
    setDraggedId: (draggedId) => set({ draggedId }),
}));

export const useDragStore = createSelectors(store);
