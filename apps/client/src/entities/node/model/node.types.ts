import { GridPoint } from '@/shared/types/canvas';

export interface Node {
    id: string;
    point: GridPoint;
    children?: string[];
    parent?: string;
    properties: Record<string, any>;
    droppable?: boolean;
}
