import type { GridPosition, GridSize } from '@/shared/canvas/types';

export interface Group {
    id: string;
    position: GridPosition;
    size: GridSize;
    childNodeIds: string[];
    properties: { [key: string]: any };
}
