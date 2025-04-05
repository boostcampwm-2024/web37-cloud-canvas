import type { SVGProps } from 'react';

import type { GridSize } from '@/shared/canvas/types';

export type ResourceType = 'server' | 'object-storage' | string;

export type ResourceSVGProps = {
    size: GridSize;
} & SVGProps<SVGSVGElement>;

export interface ResourceCategory {
    title: string;
    resources: Array<{
        title: string;
        type: ResourceType;
    }>;
}
