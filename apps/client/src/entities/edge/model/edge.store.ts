import { createSelectors } from '@/shared/lib/zustand/selector';
import { create } from 'zustand';
import { DraftEdge, Edge } from './edge.type';
import { nanoid } from 'nanoid';

interface EdgeStates {
    draftEdge: DraftEdge | null;
    edges: Record<string, Edge>;
}

interface EdgeActions {
    createDraftEdge: (sourceId: string) => void;
    progressDraftEdge: (targetId?: string) => void;
    finalizeDraftEdge: () => void;
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
                            },
                        },
                    };
                }
                return {
                    draftEdge: null,
                };
            }),
    },
}));

export const useEdgeStore = createSelectors(store);
