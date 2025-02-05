import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

import { DROP_OPTIONS } from '../config/drop';
import { getNodeGridBoundary, isOutsideBoundary } from '../lib/boundary';
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
    const resources = useResourceStore.use.resources();
    const nodes = useNodeStore.use.nodes();
    const viewMode = useCanvasStore.use.viewMode();
    const moveNode = useNodeStore.use.moveNode();
    const addChildNode = useNodeStore.use.addChildNode();
    const removeChildNode = useNodeStore.use.removeChildNode();
    const updateNodeLayout = useNodeStore.use.updateNodeLayout();

    const updateNodePointerEvents = (value: 'none' | 'default') => {
        const $canvas = getCanvasEl();
        const $node = $canvas?.getElementById(nodeId);
        $node?.setAttribute('pointer-events', value);
    };

    const calculateDragOffset = (
        currentPoint: CoordPoint,
        previousPoint: CoordPoint,
    ): CoordPoint => {
        return {
            x: currentPoint.x - previousPoint.x,
            y: currentPoint.y - previousPoint.y,
        };
    };

    const isOuterOfDropZone = () => {
        if (!draggedId || !hoverDropZoneId) return false;

        const dropZoneNode = nodes[hoverDropZoneId];
        if (!dropZoneNode?.children?.includes(draggedId)) return false;

        const dropZoneGridBoundary = getNodeGridBoundary({
            node: dropZoneNode,
            viewMode,
        });
        const draggedGridBoundary = getNodeGridBoundary({
            node: nodes[draggedId],
            viewMode,
        });

        return isOutsideBoundary({
            itemBoundary: draggedGridBoundary,
            containerBoundary: dropZoneGridBoundary,
        });
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
        if (!$canvas || draggedId !== nodeId || !prevDragPoint) return;

        const svgPoint = screenToSvgPoint($canvas, point);
        const offset = calculateDragOffset(svgPoint, prevDragPoint);

        const snappedPoint = snapPoint(offset, viewMode);
        moveNode(nodeId, snappedPoint.grid);

        const updatedPoint = {
            x: prevDragPoint.x + snappedPoint.coord.x,
            y: prevDragPoint.y + snappedPoint.coord.y,
        };

        setPrevDragPoint(updatedPoint);
    };
    const dropDropZone = () => {
        if (!hoverDropZoneId || !draggedId) return;

        const dropZoneResource = resources[hoverDropZoneId];
        const draggedResource = resources[draggedId];
        const options = DROP_OPTIONS[dropZoneResource.properties.type];

        if (options.accepts.includes(draggedResource.properties.type)) {
            addChildNode(hoverDropZoneId, draggedId);
            updateNodeLayout(hoverDropZoneId, {
                layoutType: options.layoutType,
                padding: options.padding,
            });
        }
    };

    const stopDrag = () => {
        if (draggedId !== nodeId) return;

        dropDropZone();
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
        const dropZoneResource = resources[hoverDropZoneId];
        const options = DROP_OPTIONS[dropZoneResource.properties.type];
        updateNodeLayout(hoverDropZoneId, {
            layoutType: options.layoutType,
            padding: options.padding,
        });
        setHoverDropZoneId(null);
    };

    return {
        startDrag,
        processDrag,
        stopDrag,
        isOuterOfDropZone,
        leaveDropZone,
        enterDropZone,
    };
};
