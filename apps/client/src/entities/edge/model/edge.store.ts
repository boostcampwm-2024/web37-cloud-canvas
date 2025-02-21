import { nanoid } from 'nanoid';
import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';
import type { GridPoint } from '@/shared/types/canvas';

import type { DraftEdge, Edge } from './edge.type';

interface EdgeStates {
    draftEdge: DraftEdge | null;
    edges: Record<string, Edge>;
}

interface EdgeActions {
    createDraftEdge: (sourceId: string) => void;
    progressDraftEdge: (targetId?: string) => void;
    finalizeDraftEdge: () => void;
    splitEdge: (id: string, beizerPoint: GridPoint) => void;
}

interface EdgeStore extends EdgeStates {
    actions: EdgeActions;
}

const store = create<EdgeStore>((set) => ({
    edges: {},
    draftEdge: null,
    actions: {
        createDraftEdge: (sourceId) =>
            set({
                draftEdge: {
                    sourceId,
                },
            }),
        progressDraftEdge: (targetId) =>
            set((state) => {
                return {
                    draftEdge: {
                        sourceId: state.draftEdge!.sourceId,
                        targetId,
                    },
                };
            }),
        finalizeDraftEdge: () =>
            set((state) => {
                const { draftEdge } = state;
                if (!draftEdge) return state;

                if (draftEdge.sourceId && draftEdge.targetId) {
                    const id = `edge-${nanoid()}`;
                    return {
                        draftEdge: null,
                        edges: {
                            ...state.edges,
                            [id]: {
                                id,
                                sourceId: draftEdge.sourceId,
                                targetId: draftEdge.targetId,
                                type: 'line',
                                beizerPoints: [],
                            },
                        },
                    };
                }
                return {
                    draftEdge: null,
                };
            }),
        splitEdge: (id, beizerPoint) =>
            set((state) => {
                return {
                    edges: {
                        ...state.edges,
                        [id]: {
                            ...state.edges[id],
                            beizerPoints: [
                                ...state.edges[id].beizerPoints,
                                beizerPoint,
                            ],
                        },
                    },
                };
            }),
    },
}));

export const useEdgeStore = createSelectors(store);
