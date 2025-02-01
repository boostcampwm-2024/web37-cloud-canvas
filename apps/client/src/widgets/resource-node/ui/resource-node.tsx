import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Node } from '@/entities/node/ui/Node';
import { useDragNode } from '@/features/drag-node/hooks/use-drag-node';
import { GridPoint } from '@/shared/types/canvas';
import { ResourceType } from '@/shared/types/resource';
import { useMemo } from 'react';
import { ResourceNodeComponents } from '../model/resource-node.model';

interface ResourceNodeProps {
    id: string;
    point: GridPoint;
    resourceType: ResourceType;
}

export const ResourceNode = (props: ResourceNodeProps) => {
    const { id, point, resourceType } = props;

    const viewMode = useCanvasStore.use.viewMode();

    const { startDragNode } = useDragNode(id);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDragNode(id, { x: event.clientX, y: event.clientY });
    };

    const SVGComponent = useMemo(
        () => ResourceNodeComponents[resourceType],
        [resourceType],
    );

    if (!SVGComponent) return null;

    return (
        <Node
            point={point}
            onMouseDownCapture={handleMouseDown}
            viewMode={viewMode}
            data-canvas-type="node"
            data-resource-type={resourceType}
        >
            <SVGComponent viewMode={viewMode} />
        </Node>
    );
};
