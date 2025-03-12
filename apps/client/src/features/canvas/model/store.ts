import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/shared/zustand/lib';

import { createNodeSlice, type NodeSlice } from './slices/node';
import { createSelectionSlice, type SelectionSlice } from './slices/selection';

const store = create<SelectionSlice & NodeSlice>()(
    devtools(
        immer((...args) => ({
            ...createSelectionSlice(...args),
            ...createNodeSlice(...args),
        })),
    ),
);

export const useCanvasStore = createSelectors(store);
