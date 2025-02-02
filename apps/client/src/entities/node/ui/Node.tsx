import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import { GridPoint, SizeByViewMode, ViewMode } from '@/shared/types/canvas';
import { ResourceSVGProps } from '@/shared/types/resource';
import { ComponentType, SVGProps } from 'react';

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
