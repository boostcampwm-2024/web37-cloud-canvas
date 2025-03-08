import { SVGProps as ReactSVGProps } from 'react';
import { GridSize, ViewMode, ViewModeMap } from './canvas.types';

export type ResourceType =
    | 'server'
    | 'container'
    | 'cloud-function'
    | 'auto-scaling'
    | 'object-storage';

export interface ResourceSVGProps extends ReactSVGProps<SVGSVGElement> {
    viewMode: ViewMode;
    size: ViewModeMap<GridSize>;
}

export type SVGProps = { size: GridSize } & ReactSVGProps<SVGSVGElement>;

export type NetworkType = 'vpc' | 'subnet' | 'securityGroup';
