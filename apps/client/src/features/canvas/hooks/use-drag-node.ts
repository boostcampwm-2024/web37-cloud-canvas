import { useRef } from 'react';

import { snapPosition } from '@/shared/canvas/lib/position';
import { screenToSvgPosition } from '@/shared/canvas/lib/svg';
import type { CoordPosition } from '@/shared/canvas/types';

import { useCanvasState } from '../model/context';
import { useCanvasStore } from '../model/store';

export const useDragNode = (canvasEl: SVGSVGElement | null, nodeId: string) => {
    const prevPointRef = useRef<CoordPosition | null>(null);
    const { select } = useCanvasStore.use.selectionActions();
    const { moveNode } = useCanvasStore.use.nodeActions();
    const { viewMode } = useCanvasState();

    const startDrag = (position: CoordPosition) => {
        if (!canvasEl) return;
        const svgPosition = screenToSvgPosition(canvasEl, position);
        prevPointRef.current = svgPosition;
        select(nodeId);
    };

    const moveDrag = (position: CoordPosition) => {
        if (!canvasEl || !prevPointRef.current) return;
        const svgPosition = screenToSvgPosition(canvasEl, position);
        const offset = {
            x: svgPosition.x - prevPointRef.current.x,
            y: svgPosition.y - prevPointRef.current.y,
        };

        const snappedPoint = snapPosition(offset, viewMode);
        moveNode(nodeId, snappedPoint.grid);

        prevPointRef.current = {
            x: prevPointRef.current.x + snappedPoint.coord.x,
            y: prevPointRef.current.y + snappedPoint.coord.y,
        };
    };

    const stopDrag = () => {
        prevPointRef.current = null;
    };

    return {
        startDrag,
        moveDrag,
        stopDrag,
    };
};
