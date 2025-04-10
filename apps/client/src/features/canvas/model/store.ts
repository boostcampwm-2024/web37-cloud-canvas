import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/shared/zustand/lib';

import type { EdgeSlice } from './slices/edge';
import { createEdgeSlice } from './slices/edge';
import type { GroupSlice } from './slices/group';
import { createGroupSlice } from './slices/group';
import { createNodeSlice, type NodeSlice } from './slices/node';
import { createSelectionSlice, type SelectionSlice } from './slices/selection';

const store = create<SelectionSlice & NodeSlice & EdgeSlice & GroupSlice>()(
    devtools(
        immer((...args) => ({
            ...createSelectionSlice(...args),
            ...createNodeSlice(...args),
            ...createEdgeSlice(...args),
            ...createGroupSlice(...args),
        })),
    ),
);

export const useCanvasStore = createSelectors(store);
