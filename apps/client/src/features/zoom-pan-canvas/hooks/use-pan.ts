import { useRef } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import { applyCursorStyle } from '@/shared/lib/shadcn/utils';
import type { Point } from '@/shared/types/canvas';

export const usePan = () => {
    const viewbox = useCanvasStore.use.viewbox();
    const setViewbox = useCanvasStore.use.setViewbox();
    const { getCanvasEl } = useCanvasContext();

    const startSvgPointRef = useRef<Point | null>(null);
    const $canvas = getCanvasEl();

    const startPan = (point: Point) => {
        startSvgPointRef.current = screenToSvgPoint($canvas!, point);
    };

    const movePan = (point: Point) => {
        if (!startSvgPointRef.current) return;

        const curSvgPoint = screenToSvgPoint($canvas!, point);

        const dx = startSvgPointRef.current.x - curSvgPoint.x;
        const dy = startSvgPointRef.current.y - curSvgPoint.y;

        setViewbox({
            ...viewbox,
            x: viewbox.x + dx,
            y: viewbox.y + dy,
        });
    };

    const stopPan = () => {
        startSvgPointRef.current = null;
    };

    const handleMouseDown = (e: MouseEvent) => {
        applyCursorStyle('body', 'grab');
        startPan({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
        movePan({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        stopPan();
        applyCursorStyle('body', 'default');
    };

    useEventListener($canvas, 'mousedown', handleMouseDown);
    useEventListener($canvas, 'mousemove', handleMouseMove);
    useEventListener($canvas, 'mouseup', handleMouseUp);
};
