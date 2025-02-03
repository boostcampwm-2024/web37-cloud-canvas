import type { ComponentType, SVGProps } from 'react';

import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import type {
    GridPoint,
    SizeByViewMode,
    ViewMode,
} from '@/shared/types/canvas';
import type { ResourceSVGProps } from '@/shared/types/resource';

export interface NodeProps extends SVGProps<SVGGElement> {
    id: string;
    point: GridPoint;
    size: SizeByViewMode;
    viewMode: ViewMode;
    svg: ComponentType<ResourceSVGProps>;
}
export const Node = (props: NodeProps) => {
    const { point, viewMode, size, svg: SVGComponent, ...rest } = props;

    const coordPoint = gridToCoordPoint(point, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;

    return (
        <g transform={transform} {...rest}>
            <SVGComponent viewMode={viewMode} size={size} />
        </g>
    );
};
