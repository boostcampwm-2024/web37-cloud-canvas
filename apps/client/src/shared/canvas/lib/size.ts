import type { GridSize } from '../types';

export const isSingleSize = (
    size: GridSize | { '2d': GridSize; '3d': GridSize },
): size is GridSize => {
    return !('2d' in size && '3d' in size);
};
