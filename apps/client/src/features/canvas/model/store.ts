import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/shared/zustand/lib';

import { createCanvasSlice, type CanvasSlice } from './slices/canvas';
import { createNodeSlice, type NodeSlice } from './slices/node';

const store = create<CanvasSlice & NodeSlice>()(
    devtools(
        immer((...args) => ({
            ...createCanvasSlice(...args),
            ...createNodeSlice(...args),
        })),
    ),
);

export const useCanvasStore = createSelectors(store);
