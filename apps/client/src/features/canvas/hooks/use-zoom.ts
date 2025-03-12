import { screenToSvgPosition } from '@/shared/canvas/lib/svg';
import type { CoordPosition } from '@/shared/canvas/types';

import { useCanvasActions, useCanvasState } from '../model/context';

export const SCALE_STEP = 0.1;
export const MIN_ZOOM = 0.1;
export const MAX_ZOOM = 8;

export const useZoom = ($canvas: SVGSVGElement | null) => {
    const { zoomFactor, viewbox } = useCanvasState();
    const { updateViewbox, updateZoomFactor } = useCanvasActions();

    const validateZoomFactor = (zoomFactor: number): boolean => {
        if (zoomFactor < 1 && zoomFactor <= MIN_ZOOM) return false;
        if (zoomFactor > 1 && zoomFactor >= MAX_ZOOM) return false;
        return true;
    };

    const calcZoomFactor = (currentZoom: number, zoomDelta: number): number => {
        const newZoom = currentZoom * zoomDelta;
        return Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM);
    };

    const zoom = (position: CoordPosition, zoomStep: number) => {
        if (!$canvas) return;

        const newZoomFactor = calcZoomFactor(zoomFactor, zoomStep);

        if (!validateZoomFactor(newZoomFactor)) return;
        updateZoomFactor(newZoomFactor);

        const svgPosition = screenToSvgPosition($canvas, position);

        const newViewbox = {
            x: viewbox.x + (svgPosition.x - viewbox.x) * (1 - zoomStep),
            y: viewbox.y + (svgPosition.y - viewbox.y) * (1 - zoomStep),
            width: viewbox.width * zoomStep,
            height: viewbox.height * zoomStep,
        };

        updateViewbox(newViewbox);
    };

    const zoomIn = (position: CoordPosition) => {
        zoom(position, 1 + SCALE_STEP);
    };
    const zoomOut = (position: CoordPosition) => {
        zoom(position, 1 - SCALE_STEP);
    };

    return {
        zoomIn,
        zoomOut,
    };
};
