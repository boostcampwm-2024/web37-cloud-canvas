import type { GridPoint } from '@/shared/types/canvas';

export interface DraftEdge {
    sourceId: string;
    targetId?: string;
}

export interface Edge {
    id: string;
    sourceId: string;
    targetId: string;
    type: string;
    beizerPoints: Array<GridPoint>;
}
