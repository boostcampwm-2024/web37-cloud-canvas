import {
    GRID_HEIGHT_3D,
    GRID_WIDTH_3D,
} from '@/features/canvas/config/constants';
import { generateBlockFaces } from '@/features/canvas/lib/geometry';
import type { GridSize } from '@/features/canvas/model/canvas.types';
import type { SVGProps } from '@/features/canvas/model/resource.types';

import { cn } from '@/shared/lib/shadcn/utils';

import { Polygon } from '../common/Polygon';

export const ServerSVG3D = (props: SVGProps) => {
    const { size } = props;

    const { top, left, right } = generateBlockFaces(size as Required<GridSize>);

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * (size.rows + size.depth!);

    const strokePoints = [top[0], top[1], right[3], right[2], left[1], left[0]];
    return (
        <svg width={width} height={height} className={cn('overflow-visible')}>
            <Polygon positions={top} fill="#ececed" stroke="#83838a" />
            <Polygon positions={left} fill="#d2d2d4" stroke="#83838a" />
            <Polygon positions={right} fill="#b8b8bb" stroke="#83838a" />
            <Polygon
                positions={strokePoints}
                stroke="#000"
                fill="none"
                strokeWidth="2"
            />
        </svg>
    );
};
