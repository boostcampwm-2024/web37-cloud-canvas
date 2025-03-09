import type { SVGProps } from 'react';

import type { GridSize } from '@/shared/canvas/types';

export type ResourceType = 'server';

export type ResourceSVGProps = {
    size: GridSize;
} & SVGProps<SVGSVGElement>;
