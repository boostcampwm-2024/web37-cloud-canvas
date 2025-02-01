import { SVGProps } from 'react';
import { GridSize2D, GridSize3D, ViewMode } from './canvas';

export type ResourceType = 'server' | 'container';

export interface ResourceSVGProps extends SVGProps<SVGSVGElement> {
    viewMode: ViewMode;
}

export interface ResourceSVG2DProps extends SVGProps<SVGSVGElement> {
    size: GridSize2D;
}

export interface ResourceSVG3DProps extends SVGProps<SVGSVGElement> {
    size: GridSize3D;
}
