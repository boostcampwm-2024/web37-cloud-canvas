import _ from 'lodash';
import type { StateCreator } from 'zustand';

import type { SelectionSlice } from './selection';

export interface EdgeSlice {
    edges: Record<string, Node>;
}

export const createEdgeSlice: StateCreator<
    EdgeSlice & SelectionSlice,
    [['zustand/immer', never]],
    [['zustand/immer', never]],
    EdgeSlice
> = (set) => ({
    edges: {},
    edgeActions: {},
});
