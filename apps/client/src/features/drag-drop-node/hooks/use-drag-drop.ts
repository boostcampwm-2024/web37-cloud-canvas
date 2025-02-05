import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';
import type { Node } from '@/entities/node/model/node.types';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { snapPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint, GridBoundary, ViewMode } from '@/shared/types/canvas';

import { DROP_OPTIONS } from '../config/drop';
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

    const calculateDragOffset = (currentPoint: CoordPoint): CoordPoint => {
        if (!prevDragPoint) return { x: 0, y: 0 };

        return {
            x: currentPoint.x - prevDragPoint.x,
            y: currentPoint.y - prevDragPoint.y,
        };
    };

    const getNodeGridBoundary = (
        node: Node,
        viewMode: ViewMode,
    ): GridBoundary => {
        return {
            col: node.point.col,
            row: node.point.row,
            cols: node.size[viewMode].cols,
            rows: node.size[viewMode].rows,
        };
    };

    const isOutside = (
        itemBoundary: GridBoundary,
        containerBoundary: GridBoundary,
    ) => {
        const srcCenterPoint = {
            col: itemBoundary.col + itemBoundary.cols / 2,
            row: itemBoundary.row + itemBoundary.rows / 2,
        };

        return (
            srcCenterPoint.col < containerBoundary.col ||
            srcCenterPoint.col >
                containerBoundary.col + containerBoundary.cols ||
            srcCenterPoint.row < containerBoundary.row ||
            srcCenterPoint.row > containerBoundary.row + containerBoundary.rows
        );
    };

    const isOuterOfDropZone = () => {
        if (!draggedId || !hoverDropZoneId) return false;

        const dropZoneNode = nodes[hoverDropZoneId];
        const isDropZoneHasChild = dropZoneNode?.children?.includes(draggedId);
        if (!isDropZoneHasChild) return false;

        const dropZoneGridBoundary = getNodeGridBoundary(
            dropZoneNode,
            viewMode,
        );
        const draggedNode = nodes[draggedId];
        const draggedGridBoundary = getNodeGridBoundary(draggedNode, viewMode);

        return isOutside(draggedGridBoundary, dropZoneGridBoundary);
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
        if (!$canvas || draggedId !== nodeId) return;

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
        if (draggedId !== nodeId) return;

        if (hoverDropZoneId) {
            const dropZoneResource = resources[hoverDropZoneId];
            const draggedResource = resources[draggedId];
            const options = DROP_OPTIONS[dropZoneResource.properties.type];
            if (options.accepts.includes(draggedResource.properties.type)) {
                addChildNode(hoverDropZoneId, nodeId);
                updateNodeLayout(hoverDropZoneId, {
                    layoutType: options.layoutType,
                    padding: options.padding,
                });
            }
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
        const dropZoneResource = resources[hoverDropZoneId];
        const options = DROP_OPTIONS[dropZoneResource.properties.type];
        updateNodeLayout(hoverDropZoneId, {
            layoutType: options.layoutType,
            padding: options.padding,
        });
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
            if (isOuterOfDropZone()) {
                leaveDropZone();
            }
        },
    });

    return {
        startDrag,
        enterDropZone,
    };
};
