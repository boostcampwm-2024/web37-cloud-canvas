import { GRID_SIZE_2D, IsoMatrix } from '@/shared/config/canvas';
import { cn } from '@/shared/lib/shadcn/utils';
import type { ResourceSVG3DProps } from '@/shared/types/resource';

import { Polygon } from '../common/polygon';

export const AutoScalingSVG3D = (props: ResourceSVG3DProps) => {
    const { size, className, ...svgProps } = props;

    const width = GRID_SIZE_2D * size.cols;
    const height = GRID_SIZE_2D * size.rows;
    const transform = IsoMatrix?.toString();

    return (
        <svg
            width={width}
            height={height}
            overflow="visible"
            transform={transform}
            className={cn('overflow-visible', className)}
            {...svgProps}
        >
            <g transform={transform}>
                <Polygon
                    points={[
                        { x: 45, y: 0 },
                        { x: width - 45, y: 0 },
                        { x: width - 45, y: height },
                        { x: 45, y: height },
                    ]}
                    strokeWidth="45"
                    fill="#f5b720"
                    stroke="#f5b720"
                />
                <g cursor="nwse-resize">
                    <Polygon
                        points={[
                            { x: 45, y: 0 },
                            { x: 0, y: 0 },
                            { x: 0, y: -45 },
                            { x: -45, y: 45 },
                            { x: 0, y: 135 },
                            { x: 0, y: 90 },
                            { x: 45, y: 90 },
                        ]}
                        fill="#f5b720"
                    />
                    <Polygon
                        points={[
                            { x: width - 45, y: 0 },
                            { x: width, y: 0 },
                            { x: width, y: -45 },
                            { x: width + 45, y: 45 },
                            { x: width, y: 135 },
                            { x: width, y: 90 },
                            { x: width - 45, y: 90 },
                        ]}
                        fill="#f5b720"
                    />
                </g>
            </g>
        </svg>
    );
};
