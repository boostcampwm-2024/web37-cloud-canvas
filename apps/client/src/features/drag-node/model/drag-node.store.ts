import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

interface DragNodeStore {
    draggedId: string | null;
    hoverDropZoneId: string | null;
    setDraggedId: (draggedId: string | null) => void;
    setHoverDropZoneId: (hoverDropZoneId: string | null) => void;
}

const store = create<DragNodeStore>((set) => ({
    draggedId: null,
    hoverDropZoneId: null,
    setDraggedId: (draggedId) => set({ draggedId }),
    setHoverDropZoneId: (hoverDropZoneId) => set({ hoverDropZoneId }),
}));

export const useDragNodeStore = createSelectors(store);
