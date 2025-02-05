import type { ReactElement } from 'react';
import { cloneElement } from 'react';

import type { NodeProps } from '@/entities/node/ui/Node';

import type { ResourceType } from '@/shared/types/resource';

import { useDragDrop } from '../hooks/use-drag-drop';

interface DraggableProps {
    children: ReactElement<NodeProps>;
    droppable?: boolean;
    resourceType: ResourceType;
}

export const Draggable = (props: DraggableProps) => {
    const { children, droppable } = props;

    const { startDrag, enterDropZone } = useDragDrop(children.props.id);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDrag({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
        enterDropZone();
    };

    return cloneElement(children, {
        onMouseDownCapture: handleMouseDown,
        onMouseEnter: droppable ? handleMouseEnter : undefined,
    });
};
