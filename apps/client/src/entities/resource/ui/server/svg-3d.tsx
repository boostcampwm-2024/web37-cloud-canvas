import { generateBlockFaces } from '@/shared/canvas/lib/geometry';
import type { GridSize } from '@/shared/canvas/types';
import { Polygon } from '@/shared/canvas/ui/polygon';

import type { ResourceSVGProps } from '../../model/types';

export const ServerSVG3D = (props: ResourceSVGProps) => {
    const { size, className, ...svgProps } = props;

    const { top, left, right } = generateBlockFaces(size as Required<GridSize>);

    const strokePoints = [top[0], top[1], right[3], right[2], left[1], left[0]];
    return (
        <svg overflow="visible" className={className} {...svgProps}>
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
