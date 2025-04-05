import type { GridPosition } from '@/shared/canvas/types';

export interface Edge {
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    bezierPositions: Array<GridPosition>;
}

export interface DraftEdge {
    sourceNodeId: string;
    targetNodeId?: string;
    endPosition: GridPosition;
}
