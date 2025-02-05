import { useRef } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

import { MAX_ZOOM, MIN_ZOOM, SCALE_STEP } from '../config/zoom';

export const useZoom = () => {
    const viewbox = useCanvasStore.use.viewbox();
    const setViewbox = useCanvasStore.use.setViewbox();
    const { getCanvasEl } = useCanvasContext();

    const curZoomRatioRef = useRef<number>(1);

    const validateZoomFactor = (zoomFactor: number): boolean => {
        if (zoomFactor < 1 && zoomFactor <= MIN_ZOOM) return false;
        if (zoomFactor > 1 && zoomFactor >= MAX_ZOOM) return false;
        return true;
    };

    const calcZoomFactor = (currentZoom: number, zoomDelta: number): number => {
        const newZoom = currentZoom * zoomDelta;
        return Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM);
    };

    const zoom = (point: CoordPoint, zoomStep: number) => {
        const $canvas = getCanvasEl();
        if (!$canvas) return;

        const newZoomFactor = calcZoomFactor(curZoomRatioRef.current, zoomStep);

        if (!validateZoomFactor(newZoomFactor)) return;
        curZoomRatioRef.current = newZoomFactor;

        const svgPoint = screenToSvgPoint($canvas!, point);

        const newViewbox = {
            x: viewbox.x + (svgPoint.x - viewbox.x) * (1 - zoomStep),
            y: viewbox.y + (svgPoint.y - viewbox.y) * (1 - zoomStep),
            width: viewbox.width * zoomStep,
            height: viewbox.height * zoomStep,
        };

        setViewbox(newViewbox);
    };

    const zoomIn = (point: CoordPoint) => {
        zoom(point, 1 + SCALE_STEP);
    };
    const zoomOut = (point: CoordPoint) => {
        zoom(point, 1 - SCALE_STEP);
    };

    return {
        zoomIn,
        zoomOut,
    };
};
