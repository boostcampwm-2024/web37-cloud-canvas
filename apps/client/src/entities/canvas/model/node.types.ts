import type { ComponentType } from 'react';

import type { GridPosition, GridSize } from '@/shared/canvas/types';

import type { ViewMode } from './canvas.types';

export interface Node {
    id: string;
    position: GridPosition;
    size:
        | {
              [mode in ViewMode]: GridSize;
          }
        | GridSize;
    connectors: {
        [mode in ViewMode]: {
            direction: 'left' | 'top' | 'right' | 'bottom';
            position: GridPosition;
        };
    };
    groupIds: string[];
    svg2D: ComponentType<any>;
    svg3D: ComponentType<any>;
    properties: { [key: string]: any };
    droppable?: boolean; // dropzone 기능 여부
    childNodeIds?: string[]; // 포함된 노드 ID 목록 (드롭존인 경우)
}
