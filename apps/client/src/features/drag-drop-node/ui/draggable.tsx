import type { ReactElement } from 'react';
import { cloneElement } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import type { NodeProps } from '@/entities/node/ui/Node';

import { useEventListener } from '@/shared/hooks/useEventListener';

import { useDragDrop } from '../hooks/use-drag-drop';

interface DnDResourceNodeProps {
    children: ReactElement<NodeProps>;
    droppable?: boolean;
}

export const DnDResourceNode = (props: DnDResourceNodeProps) => {
    const { children, droppable } = props;

    const { getCanvasEl } = useCanvasContext();
    const {
        startDrag,
        stopDrag,
        processDrag,
        isOuterOfDropZone,
        leaveDropZone,
        enterDropZone,
    } = useDragDrop(children.props.id);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDrag({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
        enterDropZone();
    };

    const handleMouseUp = () => {
        stopDrag();
    };

    const handleMouseMove = (event: MouseEvent) => {
        processDrag({ x: event.clientX, y: event.clientY });
        if (isOuterOfDropZone()) {
            leaveDropZone();
        }
    };

    useEventListener({
        target: getCanvasEl(),
        eventType: 'mouseup',
        handler: handleMouseUp,
    });

    useEventListener({
        target: getCanvasEl(),
        eventType: 'mousemove',
        handler: handleMouseMove,
    });

    return cloneElement(children, {
        onMouseDownCapture: handleMouseDown,
        onMouseEnter: droppable ? handleMouseEnter : undefined,
    });
};
