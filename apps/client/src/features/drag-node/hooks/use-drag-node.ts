import { useRef } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

import { useDragNodeStore } from '../model/drag-node.store';

export const useDragNode = (id: string) => {
    const { getCanvasEl } = useCanvasContext();

    const { draggedId, setDraggedId } = useDragNodeStore();
    const viewMode = useCanvasStore.use.viewMode();
    const moveNode = useNodeStore.use.moveNode();

    const startPointRef = useRef<CoordPoint | null>(null);

    const startDragNode = (id: string, point: CoordPoint) => {
        const $canvas = getCanvasEl();
        if (!$canvas) return;

        const svgPoint = screenToSvgPoint($canvas, point);
        startPointRef.current = svgPoint;
        setDraggedId(id);
    };

    const dragNode = (point: CoordPoint) => {
        const $canvas = getCanvasEl();
        if (!$canvas || !draggedId || draggedId !== id) return;

        const svgPoint = screenToSvgPoint($canvas, point);
        const offset = {
            x: svgPoint.x - startPointRef.current!.x,
            y: svgPoint.y - startPointRef.current!.y,
        };

        const snappedPoint = snapPoint(offset, viewMode);
        moveNode(draggedId, snappedPoint.grid);

        const updatedPoint = {
            x: startPointRef.current!.x + snappedPoint.coord.x,
            y: startPointRef.current!.y + snappedPoint.coord.y,
        };
        startPointRef.current = updatedPoint;
    };

    const stopDragNode = () => {
        setDraggedId(null);
        startPointRef.current = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
        dragNode({ x: event.clientX, y: event.clientY });
    };

    const handleMouseUp = () => {
        stopDragNode();
    };

    useEventListener({
        target: getCanvasEl(),
        eventType: 'mouseup',
        handler: handleMouseUp,
    });
    useEventListener({
        target: document,
        eventType: 'mousemove',
        handler: handleMouseMove,
    });

    return {
        startDragNode,
    };
};
