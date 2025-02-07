import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import { generateBlockFaces } from '@/shared/lib/canvas/geometry';
import { cn } from '@/shared/lib/shadcn/utils';
import type { ResourceSVG3DProps } from '@/shared/types/resource';

import { Polygon } from '../common/polygon';

export const ContainerSVG3D = (props: ResourceSVG3DProps) => {
    const { size, className, ...svgProps } = props;

    //INFO: 하단 파란색 표면 포인트 계산
    const { depth } = size;
    const { top, left, right } = generateBlockFaces(size);

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * (size.rows + size.depth);

    const strokePoints = [top[0], top[1], right[3], right[2], left[1], left[0]];

    return (
        <svg
            width={width}
            height={height}
            className={cn('overflow-visible', className)}
            {...svgProps}
        >
            <Polygon points={top} fill="#ececed" stroke="#83838a" />
            <Polygon points={left} fill="#d2d2d4" stroke="#83838a" />
            <Polygon points={right} fill="#b8b8bb" stroke="#83838a" />
            <Polygon
                points={[
                    {
                        x: left[0].x,
                        y: left[0].y + depth / 2,
                    },
                    left[1],
                    left[2],
                    {
                        x: left[3].x,
                        y: left[3].y + depth / 2,
                    },
                ]}
                fill="#326ca2"
                stroke="#83838a"
            />
            <Polygon
                points={[
                    {
                        x: right[0].x,
                        y: right[0].y + depth / 2,
                    },
                    {
                        x: right[1].x,
                        y: right[1].y + depth / 2,
                    },
                    right[2],
                    right[3],
                ]}
                fill="#326ca2"
                stroke="#83838a"
            />
            <Polygon
                points={strokePoints}
                stroke="#000"
                fill="none"
                strokeWidth="2"
            />
        </svg>
    );
};
