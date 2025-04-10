import type { GridPosition, GridSize } from '@/shared/canvas/types';

export interface Group {
    id: string;
    childNodeIds: string[];
    properties: { [key: string]: any };
}
