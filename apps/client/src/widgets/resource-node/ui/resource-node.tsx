import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Node } from '@/entities/node/ui/Node';
import { useDragNode } from '@/features/drag-node/hooks/use-drag-node';
import { GridPoint } from '@/shared/types/canvas';
import { ResourceType } from '@/shared/types/resource';
import { useMemo } from 'react';
import { ResourceNodeComponents } from '../model/resource-node.model';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';

interface ResourceNodeProps {
    id: string;
    point: GridPoint;
    resourceType: ResourceType;
}

export const ResourceNode = (props: ResourceNodeProps) => {
    const { id, point, resourceType } = props;

    const viewMode = useCanvasStore.use.viewMode();

    const { startDragNode } = useDragNode();

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log(222);
        startDragNode(id, { x: event.clientX, y: event.clientY });
    };

    const SVGComponent = useMemo(
        () => ResourceNodeComponents[resourceType],
        [resourceType],
    );

    if (!SVGComponent) return null;

    const coordPoint = gridToCoordPoint(point, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;
    return (
        <Node transform={transform} onMouseDownCapture={handleMouseDown}>
            <SVGComponent viewMode={viewMode} />
        </Node>
    );
};
