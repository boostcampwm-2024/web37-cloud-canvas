import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

import { useDragDropStore } from '../model/drag-drop.store';

export const useDragDrop = (nodeId: string) => {
    const { getCanvasEl } = useCanvasContext();
    const {
        draggedId,
        hoverDropZoneId,
        prevDragPoint,
        setPrevDragPoint,
        setDraggedId,
        setHoverDropZoneId,
        resetDragState,
    } = useDragDropStore();
    const viewMode = useCanvasStore.use.viewMode();
    const moveNode = useNodeStore.use.moveNode();
    const addChildNode = useNodeStore.use.addChildNode();
    const removeChildNode = useNodeStore.use.removeChildNode();

    const updateNodePointerEvents = (value: 'none' | 'default') => {
        const $canvas = getCanvasEl();
        const $node = $canvas?.getElementById(nodeId);
        $node?.setAttribute('pointer-events', value);
    };

    const calculateDragOffset = (currentPoint: CoordPoint): CoordPoint => {
        if (!prevDragPoint) return { x: 0, y: 0 };

        return {
            x: currentPoint.x - prevDragPoint.x,
            y: currentPoint.y - prevDragPoint.y,
        };
    };

    const isDraggable = () => {
        return draggedId === nodeId;
    };

    const startDrag = (point: CoordPoint) => {
        const $canvas = getCanvasEl();
        if (!$canvas) return;

        const svgPoint = screenToSvgPoint($canvas, point);
        setPrevDragPoint(svgPoint);
        setDraggedId(nodeId);
        updateNodePointerEvents('none');
    };

    const processDrag = (point: CoordPoint) => {
        const $canvas = getCanvasEl();
        if (!$canvas || !isDraggable()) return;

        const svgPoint = screenToSvgPoint($canvas, point);
        const offset = calculateDragOffset(svgPoint);

        const snappedPoint = snapPoint(offset, viewMode);
        moveNode(nodeId, snappedPoint.grid);

        const updatedPoint = {
            x: prevDragPoint!.x + snappedPoint.coord.x,
            y: prevDragPoint!.y + snappedPoint.coord.y,
        };

        setPrevDragPoint(updatedPoint);
    };

    const stopDrag = () => {
        if (!isDraggable()) return;

        if (hoverDropZoneId) {
            addChildNode(hoverDropZoneId, nodeId);
        }

        resetDragState();
        updateNodePointerEvents('default');
    };

    const enterDropZone = () => {
        if (!draggedId) return;

        setHoverDropZoneId(nodeId);
    };

    const leaveDropZone = () => {
        if (!draggedId || !hoverDropZoneId) return;

        removeChildNode(hoverDropZoneId, draggedId);
        setHoverDropZoneId(null);
    };

    useEventListener({
        target: getCanvasEl(),
        eventType: 'mouseup',
        handler: () => stopDrag(),
    });

    useEventListener({
        target: getCanvasEl(),
        eventType: 'mousemove',
        handler: (event) => {
            processDrag({ x: event.clientX, y: event.clientY });
        },
    });

    return {
        startDrag,
        enterDropZone,
        leaveDropZone,
    };
};
