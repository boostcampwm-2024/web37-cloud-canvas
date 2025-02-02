import { GridPoint, SizeByViewMode } from '@/shared/types/canvas';

export interface Node {
    id: string;
    point: GridPoint;
    properties: Record<string, any>;
    size: SizeByViewMode;
    children?: string[];
    parent?: string;
    droppable?: boolean;
}
