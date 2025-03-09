import type { SVGProps } from 'react';

import type { GridSize } from './canvas.types';

export type ResourceType =
    | 'server'
    | 'container'
    | 'cloud-function'
    | 'auto-scaling'
    | 'object-storage';

export type ResourceSVGProps = {
    size: GridSize;
} & SVGProps<SVGSVGElement>;

export type NetworkType = 'vpc' | 'subnet' | 'securityGroup';
