import _ from 'lodash';
import { useRef } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import { applyCursorStyle } from '@/shared/lib/shadcn/utils';
import type { CoordPoint } from '@/shared/types/canvas';

import { MIN_ZOOM, MAX_ZOOM, SCALE_STEP } from '../config/zoom';

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

    const handleWheel = (event: WheelEvent) => {
        const point = { x: event.clientX, y: event.clientY };

        //INFO: deltaY > 0 is zoom in, deltaY < 0 is zoom out
        const zoomStep = event.deltaY > 0 ? 1 - SCALE_STEP : 1 + SCALE_STEP;
        zoom(point, zoomStep);

        applyCursorStyle('body', event.deltaY > 0 ? 'zoom-in' : 'zoom-out');
        _.delay(() => {
            applyCursorStyle('body', 'default');
        }, 500);
    };

    useEventListener({
        target: getCanvasEl(),
        eventType: 'wheel',
        handler: handleWheel,
        options: { passive: false },
    });
};
