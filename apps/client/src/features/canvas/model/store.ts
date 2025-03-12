import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/shared/zustand/lib';

import { createNodeSlice, type NodeSlice } from './slices/node';

const store = create<NodeSlice>()(
    devtools(
        immer((...args) => ({
            ...createNodeSlice(...args),
        })),
    ),
);

export const useCanvasStore = createSelectors(store);
