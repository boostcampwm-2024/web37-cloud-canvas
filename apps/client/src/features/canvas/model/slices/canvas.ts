import type { StateCreator } from 'zustand';

import type { Viewbox, ViewMode } from '@/entities/canvas/model/types';

import type { NodeSlice } from './node';

export interface CanvasSlice {
    viewbox: Viewbox;
    viewMode: ViewMode;
    zoomFactor: number;
    canvasActions: {
        updateViewbox: (viewbox: Partial<Viewbox>) => void;
        setViewbox: (viewbox: Viewbox) => void;
        setViewMode: (viewMode: ViewMode) => void;
        setZoomFactor: (factor: number) => void;
    };
}

const initialState = {
    viewbox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    },
    viewMode: '2d' as ViewMode,
    zoomFactor: 1,
};

export const createCanvasSlice: StateCreator<
    CanvasSlice & NodeSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    CanvasSlice
> = (set) => ({
    ...initialState,
    canvasActions: {
        updateViewbox: (viewbox: Partial<Viewbox>) =>
            set((state) => ({
                viewbox: {
                    ...state.viewbox,
                    ...viewbox,
                },
            })),
        setViewbox: (viewbox: Viewbox) =>
            set(() => ({
                viewbox,
            })),
        setViewMode: (viewMode: ViewMode) =>
            set(() => ({
                viewMode,
            })),
        setZoomFactor: (factor: number) =>
            set(() => ({
                zoomFactor: factor,
            })),
    },
});
