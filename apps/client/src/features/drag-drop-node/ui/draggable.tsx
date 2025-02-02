import { NodeProps } from '@/entities/node/ui/Node';
import { cloneElement, ReactElement } from 'react';
import { useDragDrop } from '../hooks/use-drag-drop';

interface DraggableProps {
    children: ReactElement<NodeProps>;
    droppable?: boolean;
}

export const Draggable = (props: DraggableProps) => {
    const { children, droppable } = props;

    const { startDrag, enterDropZone, leaveDropZone } = useDragDrop(
        children.props.id,
    );

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDrag({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
        enterDropZone();
    };

    const handleMouseLeave = () => {
        leaveDropZone();
    };

    return cloneElement(children, {
        onMouseDownCapture: handleMouseDown,
        onMouseEnter: droppable ? handleMouseEnter : undefined,
        onMouseLeave: droppable ? handleMouseLeave : undefined,
    });
};
