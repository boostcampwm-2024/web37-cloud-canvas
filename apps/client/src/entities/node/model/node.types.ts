import { GridPoint } from '@/shared/types/canvas';

export interface Node {
    id: string;
    point: GridPoint;
    properties: Record<string, any>;
}
