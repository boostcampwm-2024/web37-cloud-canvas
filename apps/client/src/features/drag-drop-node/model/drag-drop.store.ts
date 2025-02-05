import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import type { CoordPoint } from '@/shared/types/canvas';

interface DragDropStore {
    draggedId: string | null;
    hoverDropZoneId: string | null;
    prevDragPoint: CoordPoint | null;
    setDraggedId: (draggedId: string | null) => void;
    setHoverDropZoneId: (hoverDropZoneId: string | null) => void;
    setPrevDragPoint: (prevDragPoint: CoordPoint | null) => void;
    resetDragState: () => void;
}

const store = create<DragDropStore>((set) => ({
    draggedId: null,
    prevDragPoint: null,
    hoverDropZoneId: null,
    setDraggedId: (draggedId) => set({ draggedId }),
    setHoverDropZoneId: (hoverDropZoneId) => set({ hoverDropZoneId }),
    setPrevDragPoint: (prevDragPoint) => set({ prevDragPoint }),
    resetDragState: () =>
        set({ draggedId: null, prevDragPoint: null, hoverDropZoneId: null }),
}));

export const useDragDropStore = createSelectors(store);
