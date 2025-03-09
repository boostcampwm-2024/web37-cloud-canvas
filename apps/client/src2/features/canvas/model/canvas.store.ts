import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createSelectors } from '@/shared/lib/zustand/selector';

import { createNodeSlice, type NodeSlice } from './node.slice';

const store = create<NodeSlice>()(
    devtools((...a) => ({
        ...createNodeSlice(...a),
    })),
);

export const useCanvasStore = createSelectors(store);
