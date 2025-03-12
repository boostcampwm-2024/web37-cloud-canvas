'use client';

import _ from 'lodash';
import React from 'react';

import { useZoom } from '@/features/canvas/hooks/use-zoom-pan';
import { useCanvasState } from '@/features/canvas/model/context';

import { GridBackground } from './grid-background';

interface CanvasProps {
    children: React.ReactNode;
    className?: string;
}

export const applyCursorStyle = (selector: string, style: string) => {
    const element = document.querySelector(selector);
    (element as HTMLElement)?.style.setProperty('cursor', style);
};

export const Canvas = (props: CanvasProps) => {
    const { children, className } = props;
    const { canvasRef, viewbox } = useCanvasState();

    const { zoomIn, zoomOut, startPan, movePan, stopPan } = useZoom(
        canvasRef.current,
    );

    const isInitialized = viewbox.width !== 0 && viewbox.height !== 0;

    const handleZoom = (event: React.WheelEvent) => {
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

    const handleStartPan = (e: React.MouseEvent) => {
        applyCursorStyle('body', 'grab');
        startPan({ x: e.clientX, y: e.clientY });
    };

    const handleMovePan = (e: React.MouseEvent) => {
        movePan({ x: e.clientX, y: e.clientY });
    };

    const handleStopPan = () => {
        stopPan();
        applyCursorStyle('body', 'default');
    };

    return (
        <svg
            id="canvas"
            ref={canvasRef}
            viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}
            width="100%"
            height="100%"
            data-type="canvas"
            preserveAspectRatio="xMidYMid meet"
            className={className}
            onWheel={handleZoom}
            onMouseDown={handleStartPan}
            onMouseMove={handleMovePan}
            onMouseUp={handleStopPan}
        >
            <GridBackground />
            {isInitialized && children}
        </svg>
    );
};
