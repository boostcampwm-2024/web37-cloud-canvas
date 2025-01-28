import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

import type { Viewbox, ViewMode } from './canvas.types';

interface CanvasStates {
    viewbox: Viewbox;
    viewMode: ViewMode;
}

interface CanvasActions {
    updateViewbox: (viewbox: Partial<Viewbox>) => void;
    setViewbox: (viewbox: Viewbox) => void;
    setViewMode: (viewMode: ViewMode) => void;
}

const initialState: CanvasStates = {
    viewbox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    },
    viewMode: '2d',
};

const store = create<CanvasStates & CanvasActions>((set) => ({
    ...initialState,
    updateViewbox: (viewbox) =>
        set((state) => ({
            viewbox: {
                ...state.viewbox,
                ...viewbox,
            },
        })),
    setViewbox: (viewbox) => set({ viewbox }),
    setViewMode: (viewMode) => set({ viewMode }),
}));

export const useCanvasStore = createSelectors(store);
