import _ from 'lodash';
import type { StateCreator } from 'zustand';

import type { Edge } from '@/entities/canvas/model/edge.types';

import type { SelectionSlice } from './selection';

export interface EdgeSlice {
    edges: Record<string, Edge>;
    edgeActions: {
        addEdge: (edge: Edge) => void;
        removeEdge: (edgeId: string) => void;
    };
}

export const createEdgeSlice: StateCreator<
    EdgeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    EdgeSlice
> = (set) => ({
    edges: {},
    edgeActions: {
        addEdge: (edge) =>
            set((state) => {
                state.edges[edge.id] = edge;
            }),
        removeEdge: (edgeId) =>
            set((state) => {
                delete state.edges[edgeId];
            }),
    },
});
