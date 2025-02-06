import type { ReactNode } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useSelectionStore } from '@/entities/selection/model/selection.store';

import { useDrag } from '../hooks/use-darg';

interface Draggable {
    nodeId: string;
    children: ReactNode;
}

export const Draggable = (props: Draggable) => {
    const { nodeId, children } = props;

    const { getCanvasEl } = useCanvasContext();
    const select = useSelectionStore.use.select();
    const $canvas = getCanvasEl();

    const { startDrag, processDrag, stopDrag } = useDrag(nodeId, $canvas);

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        select(nodeId, 'node');
        startDrag({ x: event.clientX, y: event.clientY });

        const handleMouseMove = (e: MouseEvent) => {
            processDrag({ x: e.clientX, y: e.clientY });
        };

        const handleMouseUp = () => {
            stopDrag();
            $canvas.removeEventListener('mousemove', handleMouseMove);
            $canvas.removeEventListener('mouseup', handleMouseUp);
        };

        $canvas.addEventListener('mousemove', handleMouseMove);
        $canvas.addEventListener('mouseup', handleMouseUp);
    };

    return <g onMouseDown={handleMouseDown}>{children}</g>;
};
