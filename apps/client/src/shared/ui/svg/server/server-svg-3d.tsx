import type { SVGProps } from 'react';

import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import { generateBlockFaces } from '@/shared/lib/canvas/geometry';
import type { GridSize3D } from '@/shared/types/canvas';

import { Polygon } from '../common/polygon';

interface ServerSVG3DProps extends SVGProps<SVGSVGElement> {
    size: GridSize3D;
}

export const ServerSVG3D = (props: ServerSVG3DProps) => {
    const { size, ...svgProps } = props;

    const { top, left, right } = generateBlockFaces(size);

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * (size.rows + size.depth);

    const strokePoints = [top[0], top[1], right[3], right[2], left[1], left[0]];
    return (
        <svg
            width={width}
            height={height}
            style={{ overflow: 'visible' }}
            {...svgProps}
        >
            <Polygon points={top} fill="#ececed" stroke="#83838a" />
            <Polygon points={left} fill="#d2d2d4" stroke="#83838a" />
            <Polygon points={right} fill="#b8b8bb" stroke="#83838a" />
            <Polygon
                points={strokePoints}
                stroke="#000"
                fill="none"
                strokeWidth="2"
            />
        </svg>
    );
};
