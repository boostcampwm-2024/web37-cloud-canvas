import _ from 'lodash';
import { create } from 'zustand';

import { createSelectors } from '@/shared/lib/zustand/selector';

import type { Resource } from './resource.types';

interface ResourceState {
    resources: Record<string, Resource>;
}

interface ResourceActions {
    addResource: (resource: Resource) => void;
}

const initialState: ResourceState = {
    resources: {},
};

const store = create<ResourceState & ResourceActions>((set) => ({
    ...initialState,
    addResource: (resource) =>
        set((state) => ({
            resources: { ...state.resources, [resource.id]: resource },
        })),
}));

export const useResourceStore = createSelectors(store);
