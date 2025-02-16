import { createSelectors } from '@/shared/lib/zustand/selector';
import { GridPoint } from '@/shared/types/canvas';
import { create } from 'zustand';

interface EndPoint {
    id?: string;
    point: GridPoint;
}

interface Edge {
    sourceId: string;
    targetId: string;
    type: string;
}

export interface Connection {
    source: EndPoint;
    target: EndPoint;
}

interface EdgeStates {
    connection: Connection | null;
    edges: Record<string, Edge>;
}

interface EdgeActions {
    startConnection: (
        source: Required<EndPoint>,
        target: Required<EndPoint>,
    ) => void;
    progressConnection: (target: EndPoint, source?: EndPoint) => void;
    endConnection: () => void;
}

interface EdgeStore extends EdgeStates {
    actions: EdgeActions;
}

const store = create<EdgeStore>((set) => ({
    edges: {},
    connection: null,
    actions: {
        startConnection: (source, target) =>
            set({
                connection: {
                    source,
                    target,
                },
            }),
        progressConnection: (target, source) =>
            set((state) => {
                const connection = state.connection;
                if (!connection) return state;

                return {
                    connection: {
                        source: {
                            ...(source ?? connection.source),
                        },
                        target: {
                            ...connection.target,
                            ...target,
                        },
                    },
                };
            }),
        endConnection: () =>
            set((state) => {
                return {
                    connection: null,
                };
            }),
    },
}));

export const useEdgeStore = createSelectors(store);
