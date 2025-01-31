import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import { generateBlockFaces } from '@/shared/lib/canvas/geometry';
import { GridSize3D } from '@/shared/types/canvas';
import { SVGProps } from 'react';
import { Polygon } from './polygon';

interface BlockProps extends SVGProps<SVGSVGElement> {
    size: GridSize3D;
}
export const Block = (props: BlockProps) => {
    const { size, ...svgProps } = props;

    const { top, left, right } = generateBlockFaces(size);

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * (size.rows + size.depth);

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
        </svg>
    );
};
