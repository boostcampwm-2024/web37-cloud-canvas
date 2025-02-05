import { useRef } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { CoordPoint } from '@/shared/types/canvas';

export const usePan = ($canvas: SVGSVGElement) => {
    const viewbox = useCanvasStore.use.viewbox();
    const setViewbox = useCanvasStore.use.setViewbox();

    const startSvgPointRef = useRef<CoordPoint | null>(null);

    const startPan = (point: CoordPoint) => {
        startSvgPointRef.current = screenToSvgPoint($canvas, point);
    };

    const movePan = (point: CoordPoint) => {
        if (!startSvgPointRef.current) return;

        const curSvgPoint = screenToSvgPoint($canvas, point);

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

    return {
        startPan,
        movePan,
        stopPan,
    };
};
