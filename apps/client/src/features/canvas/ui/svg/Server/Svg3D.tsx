import { cn } from '@/shared/lib/shadcn/utils';

import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '../../../config/constants';
import { generateBlockFaces } from '../../../lib/geometry';
import type { GridSize } from '../../../model/canvas.types';
import type { ResourceSVGProps } from '../../../model/resource.types';
import { Polygon } from '../Polygon';

const Svg3D = (props: ResourceSVGProps) => {
    const { size, className } = props;

    const { top, left, right } = generateBlockFaces(size as Required<GridSize>);

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * (size.rows + size.depth!);

    const strokePoints = [top[0], top[1], right[3], right[2], left[1], left[0]];
    return (
        <svg
            width={width}
            height={height}
            className={cn('overflow-visible', className)}
        >
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

export default Svg3D;
