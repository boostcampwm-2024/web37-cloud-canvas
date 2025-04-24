// import { nanoid } from 'nanoid';
// import { create } from 'zustand';
//
// import type { DraftEdge, Edge } from './edge.type';
//
// interface EdgeStates {
//     draftEdge: DraftEdge | null;
//     edges: Record<string, Edge>;
// }
//
// interface EdgeActions {
//     createDraftEdge: (sourceId: string) => void;
//     progressDraftEdge: (targetId?: string) => void;
//     finalizeDraftEdge: () => void;
//     splitEdge: (id: string, idx: number, beizerPoint: GridPoint) => void;
//     moveBeizerPoint: (id: string, idx: number, point: GridPoint) => void;
// }
//
// interface EdgeStore extends EdgeStates {
//     actions: EdgeActions;
// }
//
// const store = create<EdgeStore>((set) => ({
//     edges: {},
//     draftEdge: null,
//     actions: {
//         createDraftEdge: (sourceId) =>
//             set({
//                 draftEdge: {
//                     sourceId,
//                 },
//             }),
//         progressDraftEdge: (targetId) =>
//             set((state) => {
//                 return {
//                     draftEdge: {
//                         sourceId: state.draftEdge!.sourceId,
//                         targetId,
//                     },
//                 };
//             }),
//         finalizeDraftEdge: () =>
//             set((state) => {
//                 const { draftEdge } = state;
//                 if (!draftEdge) return state;
//
//                 if (draftEdge.sourceId && draftEdge.targetId) {
//                     const id = `edge-${nanoid()}`;
//                     return {
//                         draftEdge: null,
//                         edges: {
//                             ...state.edges,
//                             [id]: {
//                                 id,
//                                 sourceId: draftEdge.sourceId,
//                                 targetId: draftEdge.targetId,
//                                 type: 'line',
//                                 beizerPoints: [],
//                             },
//                         },
//                     };
//                 }
//                 return {
//                     draftEdge: null,
//                 };
//             }),
//         splitEdge: (id, idx, beizerPoint) =>
//             set((state) => {
//                 return {
//                     edges: {
//                         ...state.edges,
//                         [id]: {
//                             ...state.edges[id],
//                             beizerPoints: state.edges[
//                                 id
//                             ].beizerPoints.toSpliced(idx, 0, beizerPoint),
//                         },
//                     },
//                 };
//             }),
//         moveBeizerPoint: (id, idx, point) =>
//             set((state) => {
//                 return {
//                     edges: {
//                         ...state.edges,
//                         [id]: {
//                             ...state.edges[id],
//                             beizerPoints: state.edges[
//                                 id
//                             ].beizerPoints.toSpliced(idx, 1, point),
//                         },
//                     },
//                 };
//             }),
//     },
// }));
//
// // export const useEdgeStore = createSelectors(store);
