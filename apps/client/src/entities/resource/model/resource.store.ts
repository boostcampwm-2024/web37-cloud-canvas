import _ from 'lodash';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createSelectors } from '@/shared/lib/zustand/selector';

import type { Resource } from './resource.types';

interface ResourceState {
    resources: Record<string, Resource>;
}

interface ResourceActions {
    getResource: (id: string) => Resource;
    addResource: (resource: Resource) => void;
    removeResource: (...ids: Array<string>) => void;
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
        },
    })),
);

export const useResourceStore = createSelectors(store);
