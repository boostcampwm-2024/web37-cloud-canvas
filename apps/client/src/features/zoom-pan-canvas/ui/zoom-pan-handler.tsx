import _ from 'lodash';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';

import { useEventListener } from '@/shared/hooks/useEventListener';
import { applyCursorStyle } from '@/shared/lib/shadcn/utils';

import { usePan } from '../hooks/use-pan';
import { useZoom } from '../hooks/use-zoom';

export const ZoomPanHandler = () => {
    const { getCanvasEl } = useCanvasContext();
    const $canvas = getCanvasEl();

    const { zoomIn, zoomOut } = useZoom($canvas);
    const { startPan, movePan, stopPan } = usePan($canvas);

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

    const handleWheel = (event: WheelEvent) => {
        const point = { x: event.clientX, y: event.clientY };

        if (event.deltaY < 0) {
            zoomIn(point);
        } else {
            zoomOut(point);
        }
        ////INFO: deltaY > 0 is zoom in, deltaY < 0 is zoom out

        applyCursorStyle('body', event.deltaY > 0 ? 'zoom-in' : 'zoom-out');
        _.delay(() => {
            applyCursorStyle('body', 'default');
        }, 500);
    };

    useEventListener({
        target: $canvas,
        eventType: 'mousedown',
        handler: handleMouseDown,
    });
    useEventListener({
        target: $canvas,
        eventType: 'mousemove',
        handler: handleMouseMove,
    });
    useEventListener({
        target: $canvas,
        eventType: 'mouseup',
        handler: handleMouseUp,
    });

    useEventListener({
        target: $canvas,
        eventType: 'wheel',
        handler: handleWheel,
        options: { passive: false },
    });
    return null;
};
