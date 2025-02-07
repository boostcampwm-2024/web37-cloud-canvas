'use client';

import _ from 'lodash';
import type { ReactNode } from 'react';

import { useSelectStore } from '@/features/select/model/select.store';
import { usePan } from '@/features/zoom-pan-canvas/hooks/use-pan';
import { useZoom } from '@/features/zoom-pan-canvas/hooks/use-zoom';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { Canvas } from '@/entities/canvas/ui/canvas';

import { applyCursorStyle } from '@/shared/lib/shadcn/utils';

interface CanvasProps {
    children: ReactNode;
}

export const CloudCanvas = (props: CanvasProps) => {
    const { children } = props;

    const { getCanvasEl } = useCanvasContext();
    const $canvas = getCanvasEl();

    const deselect = useSelectStore.use.deselect();

    const { zoomIn, zoomOut } = useZoom($canvas);
    const { startPan, movePan, stopPan } = usePan($canvas);

    const handleMouseDown = (e: React.MouseEvent) => {
        applyCursorStyle('body', 'grab');
        startPan({ x: e.clientX, y: e.clientY });
        deselect();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        movePan({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        stopPan();
        applyCursorStyle('body', 'default');
    };

    const handleWheel = (event: React.WheelEvent) => {
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

    return (
        <Canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
        >
            {children}
        </Canvas>
    );
};
