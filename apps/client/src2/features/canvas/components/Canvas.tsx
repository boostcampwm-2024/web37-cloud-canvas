'use client';

import React from 'react';

import { useCanvasState } from '../model/canvas.context';
import { GridBackground } from './GridBackground';

interface CanvasProps {
    children: React.ReactNode;
    className?: string;
}

export const Canvas = (props: CanvasProps) => {
    const { children, className } = props;
    const { canvasRef, viewbox } = useCanvasState();

    const isInitialized = viewbox.width !== 0 && viewbox.height !== 0;

    return (
        <svg
            ref={canvasRef}
            viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}
            width="100%"
            height="100%"
            data-type="canvas"
            preserveAspectRatio="xMidYMid meet"
            className={className}
        >
            <GridBackground />
            {isInitialized && children}
        </svg>
    );
};
