import type { ComponentType } from 'react';

import type { GridPosition, GridSize } from '@/shared/canvas/types';

export interface Node {
    id: string;
    position: GridPosition;
    size:
        | {
              '2d': GridSize;
              '3d': GridSize;
          }
        | GridSize;
    connectors: {
        '2d': Array<{
            direction: 'left' | 'top' | 'right' | 'bottom';
            position: GridPosition;
        }>;
        '3d': Array<{
            direction: 'left' | 'top' | 'right' | 'bottom';
            position: GridPosition;
        }>;
    };
    groupIds: string[];
    svg2D: ComponentType<any>;
    svg3D: ComponentType<any>;
    properties: { [key: string]: any };
    droppable?: boolean; // dropzone 기능 여부
    childNodeIds?: string[]; // 포함된 노드 ID 목록 (드롭존인 경우)
}
