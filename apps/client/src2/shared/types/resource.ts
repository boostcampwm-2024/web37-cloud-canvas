import type { SVGProps } from 'react';

import type {
    GridPoint,
    GridSize2D,
    GridSize3D,
    ViewMode,
    ViewModeMap,
} from './canvas';

export type ResourceType =
    | 'server'
    | 'container'
    | 'cloud-function'
    | 'auto-scaling'
    | 'object-storage';

export interface ResourceSVGProps extends SVGProps<SVGSVGElement> {
    viewMode: ViewMode;
    size: ViewModeMap<GridSize2D, GridSize3D>;
}

export interface ResourceSVG2DProps extends SVGProps<SVGSVGElement> {
    size: GridSize2D;
}

export interface ResourceSVG3DProps extends SVGProps<SVGSVGElement> {
    size: GridSize3D;
}

export type DropLayoutType = 'square' | 'horizontal';

export type Direction = 'top' | 'right' | 'bottom' | 'left';
export interface Connector {
    direction: Direction | string;
    point: GridPoint;
}

export interface ResourceSVGConfig {
    size: ViewModeMap<GridSize2D, GridSize3D>;
    connectors: ViewModeMap<Connector[], Connector[]>;
}
