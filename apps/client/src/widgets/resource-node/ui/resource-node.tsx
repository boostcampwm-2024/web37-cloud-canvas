'use client';

import { useMemo } from 'react';

import { DnDWrapper } from '@/features/drag-drop-node/ui/dnd-wrapper';
import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Node } from '@/entities/node/ui/node';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import type { GridPoint, SizeByViewMode } from '@/shared/types/canvas';
import type { ResourceType } from '@/shared/types/resource';

import { ResourceNodeComponents } from '../model/resource-node.model';

interface ResourceNodeProps {
    id: string;
    point: GridPoint;
    size: SizeByViewMode;
    droppable?: boolean;
}

export const ResourceNode = (props: ResourceNodeProps) => {
    const { id, point, size, droppable } = props;

    const resources = useResourceStore.use.resources();
    const viewMode = useCanvasStore.use.viewMode();
    const selectedNodeId = useSelectStore.use.selectedNodeId();
    const { select } = useSelectStore.use.actions();

    const resourceType = resources[id].properties.type as ResourceType;

    const handleSelect = () => select(id, 'node');

    const SVGComponent = useMemo(
        () => ResourceNodeComponents[resourceType],
        [resourceType],
    );

    if (!SVGComponent) return null;

    return (
        <DnDWrapper droppable={droppable}>
            <Node
                id={id}
                point={point}
                size={size}
                viewMode={viewMode}
                isSelected={selectedNodeId === id}
                svg={SVGComponent}
                onSelect={handleSelect}
                data-resource-type={resourceType}
            />
        </DnDWrapper>
    );
};
