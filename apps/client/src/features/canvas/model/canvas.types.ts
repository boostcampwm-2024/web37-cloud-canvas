import { NetworkType } from '@/entities/resource/model/resource.types';
import { ResourceType } from '@/shared/types/resource';
import { SVGProps } from 'react';

export interface Viewbox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface GridPosition {
    col: number;
    row: number;
}

export interface CoordPosition {
    x: number;
    y: number;
}

export interface GridSize {
    cols: number;
    rows: number;
    depth?: number;
}

export type ViewMode = '2d' | '3d';

export type ViewModeMap<T> = {
    [key in ViewMode]: T;
};

export type Direction = 'top' | 'right' | 'bottom' | 'left';
export interface Connector {
    direction: Direction | string;
    position: GridPosition;
}

export interface Node {
    id: string;
    type: ResourceType;
    // provider: 현재는 ncloud만 지원
    position: GridPosition;
    size: ViewModeMap<GridSize>;
    connectors: ViewModeMap<Array<Connector>>;
    groupIds: string[];
    svg2D: React.FC<SVGProps<SVGSVGElement>>;
    svg3D: React.FC<SVGProps<SVGSVGElement>>;
    properties: { [key: string]: any };
    droppable?: boolean; // dropzone 기능 여부
    childNodeIds?: string[]; // 포함된 노드 ID 목록 (드롭존인 경우)
}

export interface Edge {
    id: string;
    source: string;
    target: string;
    bezierPoints: Array<GridPosition>;
}

export interface Group {
    id: string;
    type: NetworkType;
    nodeIds: string[];
    childGroupIds: string[];
    parentGroupId?: string;
    properties: { [key: string]: any }; // 그룹 속성 (예: region 이름)
}
