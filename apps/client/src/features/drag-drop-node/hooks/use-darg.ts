import _ from 'lodash';
import { useRef } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';

import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

import { useDragStore } from '../model/drag.store';

export const useDrag = (nodeId: string, $canvas: SVGSVGElement) => {
    const viewMode = useCanvasStore.use.viewMode();
    const nodes = useNodeStore.use.nodes();
    const setDraggedId = useDragStore.use.setDraggedId();
    const moveNode = useNodeStore.use.moveNode();

    const prevPointRef = useRef<CoordPoint | null>(null);

    const calculateDragOffset = (
        currentPoint: CoordPoint,
        previousPoint: CoordPoint,
    ): CoordPoint => {
        return {
            x: currentPoint.x - previousPoint.x,
            y: currentPoint.y - previousPoint.y,
        };
    };

    const updatePointerEvents = (value: 'default' | 'none') => {
        const nodesWithoutDroppable = _.omitBy(nodes, (node) => {
            return node.droppable;
        });
        _.keys(nodesWithoutDroppable).forEach((id) => {
            const $node = $canvas.getElementById(id);
            $node?.setAttribute('pointer-events', value);
        });
    };

    const startDrag = (point: CoordPoint) => {
        const svgPoint = screenToSvgPoint($canvas, point);
        prevPointRef.current = svgPoint;
        setDraggedId(nodeId);
        updatePointerEvents('none');
    };

    const processDrag = (point: CoordPoint) => {
        const svgPoint = screenToSvgPoint($canvas, point);
        const prevPoint = prevPointRef.current;
        if (!prevPoint) return;

        const offset = calculateDragOffset(svgPoint, prevPoint);
        const snappedPoint = snapPoint(offset, viewMode);
        moveNode(nodeId, snappedPoint.grid);

        prevPointRef.current = {
            x: prevPoint.x + snappedPoint.coord.x,
            y: prevPoint.y + snappedPoint.coord.y,
        };
    };

    const stopDrag = () => {
        prevPointRef.current = null;
        setDraggedId(null);

        updatePointerEvents('default');
    };

    return {
        startDrag,
        processDrag,
        stopDrag,
    };
};
