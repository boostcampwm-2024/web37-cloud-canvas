import type { SVGProps } from 'react';

import type { GridSize } from '@/shared/canvas/types';

export type ResourceType = 'server' | string;

export type ResourceSVGProps = {
    size: GridSize;
} & SVGProps<SVGSVGElement>;
