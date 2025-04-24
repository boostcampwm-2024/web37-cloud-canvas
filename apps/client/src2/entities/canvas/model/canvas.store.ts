// import { create } from 'zustand';
//
// import { createSelectors } from '@/shared/lib/zustand/selector';
// import type { ViewMode } from '@/shared/types/canvas';
//
// import type { Viewbox } from './canvas.types';
//
// interface CanvasStates {
//     viewbox: Viewbox;
//     viewMode: ViewMode;
//     zoomFactor: number;
// }
//
// interface CanvasActions {
//     updateViewbox: (viewbox: Partial<Viewbox>) => void;
//     setViewbox: (viewbox: Viewbox) => void;
//     setViewMode: (viewMode: ViewMode) => void;
//     setZoomFactor: (factor: number) => void;
// }
//
// interface CanvasStore extends CanvasStates {
//     actions: CanvasActions;
// }
//
// const initialState: CanvasStates = {
//     zoomFactor: 1,
//     viewbox: {
//         x: 0,
//         y: 0,
//         width: 0,
//         height: 0,
//     },
//     viewMode: '2d',
// };
//
// const store = create<CanvasStore>((set) => ({
//     ...initialState,
//     actions: {
//         updateViewbox: (viewbox) =>
//             set((state) => ({
//                 viewbox: {
//                     ...state.viewbox,
//                     ...viewbox,
//                 },
//             })),
//         setViewbox: (viewbox) => set({ viewbox }),
//         setViewMode: (viewMode) => set({ viewMode }),
//         setZoomFactor: (factor) => set({ zoomFactor: factor }),
//     },
// }));
//
// export const useCanvasStore = createSelectors(store);
