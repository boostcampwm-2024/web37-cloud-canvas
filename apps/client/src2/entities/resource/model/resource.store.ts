import _ from 'lodash';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createSelectors } from '@/shared/lib/zustand/selector';

import type { NetworkType, Resource } from './resource.types';

interface ResourceState {
    resources: Record<string, Resource>;
}

interface ResourceActions {
    getResource: (id: string) => Resource;
    addResource: (resource: Resource) => void;
    removeResource: (...ids: Array<string>) => void;
    setResourceNetwork: (id: string, key: NetworkType, value: any) => void;
    setResourceProperty: (id: string, key: string, value: any) => void;
}

interface ResourceStore extends ResourceState {
    actions: ResourceActions;
}

const initialState: ResourceState = {
    resources: {},
};

const store = create<ResourceStore>()(
    devtools((set, get) => ({
        ...initialState,
        actions: {
            getResource: (id) => get().resources[id],
            addResource: (resource) =>
                set((state) => ({
                    resources: { ...state.resources, [resource.id]: resource },
                })),
            removeResource: (ids) =>
                set((state) => ({
                    resources: _.omit(state.resources, ids),
                })),
            setResourceNetwork: (id, key, value) =>
                set((state) => ({
                    resources: {
                        ...state.resources,
                        [id]: {
                            ...state.resources[id],
                            networks: {
                                ...state.resources[id].networks,
                                [key]: value,
                            },
                        },
                    },
                })),
            setResourceProperty: (id, key, value) =>
                set((state) => ({
                    resources: {
                        ...state.resources,
                        [id]: {
                            ...state.resources[id],
                            properties: {
                                ...state.resources[id].properties,
                                [key]: value,
                            },
                        },
                    },
                })),
        },
    })),
);

export const useResourceStore = createSelectors(store);
