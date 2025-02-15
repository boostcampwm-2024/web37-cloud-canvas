import { createSelectors } from '@/shared/lib/zustand/selector';
import { CoordPoint } from '@/shared/types/canvas';
import { create } from 'zustand';

type EndPoint = {
    id?: string;
    point: CoordPoint;
};

type Edge = {
    sourceId: string;
    targetId: string;
    type: string;
};

type Connection = {
    source: EndPoint;
    target: EndPoint;
};

interface EdgeStates {
    connection: Connection | null;
    edges: Record<string, Edge>;
}

interface EdgeActions {
    startConnection: (
        source: Required<EndPoint>,
        target: Required<EndPoint>,
    ) => void;
    progressConnection: (target: EndPoint) => void;
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
        progressConnection: (target) =>
            set((state) => {
                const connection = state.connection;
                if (!connection) return state;

                return {
                    connection: {
                        ...connection,
                        target,
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
