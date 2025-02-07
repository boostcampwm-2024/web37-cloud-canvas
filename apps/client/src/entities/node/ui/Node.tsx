import { type ComponentType } from 'react';

import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import type {
    GridPoint,
    SizeByViewMode,
    ViewMode,
} from '@/shared/types/canvas';
import type { ResourceSVGProps } from '@/shared/types/resource';

export interface NodeProps {
    id: string;
    point: GridPoint;
    size: SizeByViewMode;
    viewMode: ViewMode;
    isSelected: boolean;
    svg: ComponentType<ResourceSVGProps>;
    onSelect: () => void;
}
export const Node = (props: NodeProps) => {
    const {
        id,
        point,
        viewMode,
        size,
        svg: SVGComponent,
        isSelected,
        onSelect,
        ...rest
    } = props;

    const coordPoint = gridToCoordPoint(point, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;

    const handleMouseDown = () => {
        onSelect();
    };

    return (
        <g id={id} transform={transform} {...rest}>
            <SVGComponent
                viewMode={viewMode}
                size={size}
                onMouseDown={handleMouseDown}
                className={isSelected ? 'brightness-110' : 'brightness-100'}
            />
        </g>
    );
};
