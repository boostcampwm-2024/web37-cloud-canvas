'use client';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Node } from '@/entities/node/ui/Node';
import { Draggable } from '@/features/drag-drop-node/ui/draggable';
import { GridPoint } from '@/shared/types/canvas';
import { ResourceType } from '@/shared/types/resource';
import { useMemo } from 'react';
import { ResourceNodeComponents } from '../model/resource-node.model';

interface ResourceNodeProps {
    id: string;
    point: GridPoint;
    resourceType: ResourceType;
    droppable?: boolean;
}

export const ResourceNode = (props: ResourceNodeProps) => {
    const { id, point, resourceType, droppable } = props;

    const viewMode = useCanvasStore.use.viewMode();

    const SVGComponent = useMemo(
        () => ResourceNodeComponents[resourceType],
        [resourceType],
    );

    if (!SVGComponent) return null;

    return (
        <Draggable droppable={droppable}>
            <Node
                id={id}
                point={point}
                viewMode={viewMode}
                data-canvas-type="node"
                data-resource-type={resourceType}
                svg={SVGComponent}
            />
        </Draggable>
    );
};
