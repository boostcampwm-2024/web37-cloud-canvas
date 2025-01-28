'use client';

import type { ComponentProps } from 'react';

import { useCanvasContext } from '../model/canvas.context';
import { useCanvasStore } from '../model/canvas.store';

import { GridBackground } from './grid-background';

export const BaseCanvas = (props: ComponentProps<'svg'>) => {
    const { children, ...restProps } = props;
    const { canvasRef } = useCanvasContext();
    const viewbox = useCanvasStore.use.viewbox();

    return (
        <svg
            ref={canvasRef}
            viewBox={`${viewbox.x} ${viewbox.y} ${viewbox.width} ${viewbox.height}`}
            width="100%"
            height="100%"
            data-type="canvas"
            preserveAspectRatio="xMidYMid meet"
            {...restProps}
        >
            <GridBackground />
            {children}
        </svg>
    );
};
