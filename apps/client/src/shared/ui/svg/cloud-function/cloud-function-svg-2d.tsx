import { GRID_SIZE_2D } from '@/shared/config/canvas';
import type { ResourceSVG2DProps } from '@/shared/types/resource';

export const CloudFunctionSVG2D = (props: ResourceSVG2DProps) => {
    const { size, ...svgProps } = props;

    const width = GRID_SIZE_2D * size.cols;
    const height = GRID_SIZE_2D * size.rows;

    return (
        <svg width={width} height={height} {...svgProps}>
            <path fill="#ed8031" d="M0 0h90v90H0z"></path>
            <g fill="#ffffff">
                <path d="M72.6 75H57.816a1.2 1.2 0 0 1-1.08-.684L35.832 30.6h-8.844a1.2 1.2 0 0 1-1.2-1.2V16.2a1.2 1.2 0 0 1 1.2-1.2h18.48a1.2 1.2 0 0 1 1.08.684L67.356 59.4H72.6a1.2 1.2 0 0 1 1.2 1.2v13.2a1.2 1.2 0 0 1-1.2 1.2zm-14.028-2.4H71.4V61.8h-4.8a1.2 1.2 0 0 1-1.08-.684L44.712 17.4H28.2v10.8h8.4a1.2 1.2 0 0 1 1.08.684z"></path>
                <path d="M32.976 75h-15.6a1.2 1.2 0 0 1-1.02-.564 1.2 1.2 0 0 1-.06-1.2l16.32-34.092a1.2 1.2 0 0 1 1.08-.684 1.2 1.2 0 0 1 1.08.672L42.588 55.2a1.2 1.2 0 0 1 0 1.044l-8.52 18a1.2 1.2 0 0 1-1.092.756zm-13.68-2.4H32.22l7.956-16.8-6.468-13.38z"></path>
            </g>
        </svg>
    );
};
