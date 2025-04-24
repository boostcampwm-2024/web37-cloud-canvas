import type { ComponentType } from 'react';

import type { GridPosition, GridSize, ViewMode } from '@/shared/canvas/types';

export interface Connector {
    direction: 'left' | 'top' | 'right' | 'bottom' | string;
    position: GridPosition;
}
export interface Node {
    id: string;
    position: GridPosition;
    size:
        | {
              [mode in ViewMode]: GridSize; //INFO: 현재 depth는 box형태인 부분에서만 사용하고 있음
          }
        | GridSize;
    connectors: {
        [mode in ViewMode]: Connector[];
    };
    groupId: string;
    svg2D: ComponentType<any>;
    svg3D: ComponentType<any>;
    properties: { [key: string]: any };
    droppable?: boolean; // dropzone 기능 여부
    childNodeIds?: string[]; // 포함된 노드 ID 목록 (드롭존인 경우)
}
