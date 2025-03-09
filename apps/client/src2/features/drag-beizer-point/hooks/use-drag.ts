import { useRef } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';

import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

export const useDrag = (
    $canvas: SVGSVGElement,
    edgeId: string,
    bezierIdx: number,
) => {
    const viewMode = useCanvasStore.use.viewMode();
    const { moveBeizerPoint } = useEdgeStore.use.actions();
    const isDraggingRef = useRef(false);

    const startDrag = () => {
        isDraggingRef.current = true;
    };

    const processDrag = (point: CoordPoint) => {
        if (!isDraggingRef.current) return;
        const svgPoint = screenToSvgPoint($canvas, point);

        const snappedPoint = snapPoint(svgPoint, viewMode);

        moveBeizerPoint(edgeId, bezierIdx, snappedPoint.grid);
    };

    const stopDrag = () => {
        isDraggingRef.current = false;
    };

    return {
        startDrag,
        processDrag,
        stopDrag,
    };
};
