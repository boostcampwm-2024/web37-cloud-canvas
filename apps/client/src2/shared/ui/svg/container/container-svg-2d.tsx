import { GRID_SIZE_2D } from '@/shared/config/canvas';
import type { ResourceSVG2DProps } from '@/shared/types/resource';

export const ContainerSVG2D = (props: ResourceSVG2DProps) => {
    const { size, ...svgProps } = props;

    const width = GRID_SIZE_2D * size.cols;
    const height = GRID_SIZE_2D * size.rows;

    return (
        <svg width={width} height={height} {...svgProps}>
            <rect width={width} height={height} fill="#ececed" />
        </svg>
    );
};
