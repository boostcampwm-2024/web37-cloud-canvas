import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import { GridPoint, ViewMode } from '@/shared/types/canvas';
import { ReactNode, SVGProps } from 'react';

interface NodeProps extends SVGProps<SVGGElement> {
    point: GridPoint;
    viewMode: ViewMode;
    children: ReactNode;
}
export const Node = (props: NodeProps) => {
    const { point, viewMode, children, ...rest } = props;

    const coordPoint = gridToCoordPoint(point, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;
    return (
        <g transform={transform} {...rest}>
            {children}
        </g>
    );
};
