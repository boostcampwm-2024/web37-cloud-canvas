import type { GridPoint, SizeByViewMode } from '@/shared/types/canvas';

export interface Node {
    id: string;
    point: GridPoint;
    size: SizeByViewMode;
    children?: string[];
    parent?: string;
    droppable?: boolean;
}
