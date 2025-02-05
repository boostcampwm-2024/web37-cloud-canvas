import type { ReactNode } from 'react';

import { useDrop } from '../hooks/use-drop';

interface DroppableProps {
    nodeId: string;
    children: ReactNode;
}

export const Droppable = (props: DroppableProps) => {
    const { nodeId, children } = props;

    const { dropDropZone, leaveDropZone } = useDrop(nodeId);

    const handleMouseLeave = () => {
        leaveDropZone();
    };

    const handleMouseUp = () => {
        dropDropZone();
    };

    return (
        <g onMouseUpCapture={handleMouseUp} onMouseLeave={handleMouseLeave}>
            {children}
        </g>
    );
};
