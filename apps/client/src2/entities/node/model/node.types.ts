import type { GridPoint } from '@/shared/types/canvas';
import { ResourceSVGConfig } from '@/shared/types/resource';

export interface Node extends ResourceSVGConfig {
    id: string;
    point: GridPoint;
    children?: string[];
    parent?: string;
    droppable?: boolean;
    parentGroup: string;
}
