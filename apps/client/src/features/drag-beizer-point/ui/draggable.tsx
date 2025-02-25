import type { ReactNode } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';

import { useDrag } from '../hooks/use-drag';

interface Draggable {
    edgeId: string;
    bezierIdx: number;
    children: ReactNode;
}

export const Draggable = (props: Draggable) => {
    const { edgeId, bezierIdx, children } = props;

    const { getCanvasEl } = useCanvasContext();
    const $canvas = getCanvasEl();

    const { startDrag, processDrag, stopDrag } = useDrag(
        $canvas,
        edgeId,
        bezierIdx,
    );

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
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
