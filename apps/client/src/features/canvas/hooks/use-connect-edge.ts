import { coordToGridPosition } from '@/shared/canvas/lib/position';
import { screenToSvgPosition } from '@/shared/canvas/lib/svg';
import type { CoordPosition, ViewMode } from '@/shared/canvas/types';

import { useCanvasStore } from '../model/store';

export const useConnectEdge = (
    canvasEl: SVGSVGElement | null,
    viewMode: ViewMode,
) => {
    const { startDraftEdge, progressDraftEdge, finalizeDraftEdge } =
        useCanvasStore.use.edgeActions();

    const startConnectEdge = (
        sourceNodeId: string,
        mousePosition: CoordPosition,
    ) => {
        if (!canvasEl) return;

        const svgPosition = screenToSvgPosition(canvasEl, mousePosition);
        const gridPosition = coordToGridPosition(svgPosition, viewMode);

        startDraftEdge(sourceNodeId, gridPosition);
    };

    const progressConnectEdge = (
        mousePosition: CoordPosition,
        targetNodeEl: SVGElement | null,
        viewMode: ViewMode,
    ) => {
        if (!canvasEl) return;

        const svgPosition = screenToSvgPosition(canvasEl, mousePosition);
        const gridPosition = coordToGridPosition(svgPosition, viewMode);
        progressDraftEdge(gridPosition, targetNodeEl?.id);
    };

    const finalizeConnectEdge = () => {
        finalizeDraftEdge();
    };

    return {
        startConnectEdge,
        progressConnectEdge,
        finalizeConnectEdge,
    };
};
