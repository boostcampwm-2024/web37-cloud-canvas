import { nanoid } from 'nanoid';
import type { StateCreator } from 'zustand';

import type { DraftEdge, Edge } from '@/entities/canvas/model/edge.types';

import type { GridPosition } from '@/shared/canvas/types';

import type { GroupSlice } from './group';
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
        addEdge: (edge: Omit<Edge, 'id' | 'bezierPositions'>) => void;
        removeEdge: (edgeId: string) => void;
    };
}

export const createEdgeSlice: StateCreator<
    EdgeSlice & NodeSlice & SelectionSlice & GroupSlice,
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

                if (
                    draftEdge.targetNodeId &&
                    draftEdge.sourceNodeId !== draftEdge.targetNodeId
                ) {
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
                state.edges[id] = {
                    ...edge,
                    id,
                    bezierPositions: [],
                };
            }),
        removeEdge: (edgeId) =>
            set((state) => {
                delete state.edges[edgeId];
            }),
    },
});
