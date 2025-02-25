import { useRef } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';

import { coordToGridPoint, snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint, GridPoint } from '@/shared/types/canvas';

export const useDrag = (
    $canvas: SVGSVGElement,
    edgeId: string,
    bezierIdx: number,
) => {
    const viewMode = useCanvasStore.use.viewMode();
    const prevPointRef = useRef<GridPoint | null>(null);
    const { moveBeizerPoint } = useEdgeStore.use.actions();

    const startDrag = (point: CoordPoint) => {
        const svgPoint = screenToSvgPoint($canvas, point);
        prevPointRef.current = coordToGridPoint(svgPoint, viewMode);
    };

    const processDrag = (point: CoordPoint) => {
        const svgPoint = screenToSvgPoint($canvas, point);
        const prevPoint = prevPointRef.current;
        if (!prevPoint) return;

        const snappedPoint = snapPoint(svgPoint, viewMode);
        const offset = {
            col: snappedPoint.grid.col - prevPoint.col,
            row: snappedPoint.grid.row - prevPoint.row,
        };

        moveBeizerPoint(edgeId, bezierIdx, offset);

        prevPointRef.current = {
            col: prevPoint.col + offset.col,
            row: prevPoint.row + offset.row,
        };
    };

    const stopDrag = () => {
        prevPointRef.current = null;
    };

    return {
        startDrag,
        processDrag,
        stopDrag,
    };
};
