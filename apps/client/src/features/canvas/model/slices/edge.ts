import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { DraftEdge, Edge } from '@/entities/canvas/model/edge.types';

import type { GridPosition } from '@/shared/canvas/types';

import type { NodeSlice } from './node';
import type { SelectionSlice } from './selection';

export interface EdgeSlice {
    draftEdge: DraftEdge | null;
    edges: Record<string, Edge>;
    edgeActions: {
        startDraftEdge: (
            sourceNodeId: string,
            endPosition: GridPosition,
        ) => void;
        progressDraftEdge: (
            endPosition: GridPosition,
            targetId?: string,
        ) => void;
        finalizeDraftEdge: () => void;
        addEdge: (edge: Partial<Edge>) => void;
        removeEdge: (edgeId: string) => void;
    };
}

export const createEdgeSlice: StateCreator<
    EdgeSlice & NodeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    EdgeSlice
> = (set) => ({
    draftEdge: null,
    edges: {},
    edgeActions: {
        startDraftEdge: (sourceNodeId, endPosition) =>
            set(() => {
                return {
                    draftEdge: {
                        sourceNodeId,
                        endPosition,
                    },
                };
            }),
        progressDraftEdge: (endPosition, targetNodeId) =>
            set((state) => {
                return {
                    draftEdge: state.draftEdge
                        ? {
                              ...state.draftEdge,
                              targetNodeId,
                              endPosition,
                          }
                        : null,
                };
            }),
        finalizeDraftEdge: () =>
            set((state) => {
                const { draftEdge } = state;
                if (!draftEdge) return state;

                if (draftEdge.sourceNodeId !== draftEdge.targetNodeId) {
                    state.edgeActions.addEdge({
                        sourceNodeId: draftEdge.sourceNodeId,
                        targetNodeId: draftEdge.targetNodeId,
                    });
                }

                return {
                    draftEdge: null,
                };
            }),
        addEdge: (edge) =>
            set((state) => {
                const id = nanoid();
                return {
                    edges: {
                        ...state.edges,
                        [id]: {
                            ...edge,
                            bezierPositions: [],
                        },
                    },
                };
            }),
        removeEdge: (edgeId) =>
            set((state) => {
                delete state.edges[edgeId];
            }),
    },
});
