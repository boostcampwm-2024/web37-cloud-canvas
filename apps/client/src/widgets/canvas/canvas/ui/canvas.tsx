'use client';

import type { ReactNode } from 'react';

import { ZoomControls } from '@/features/zoom-pan-canvas/ui/zoom-controls';

import { BaseCanvas } from '@/entities/canvas/ui/base-canvas';

interface CanvasProps {
    children: ReactNode;
}

export const Canvas = (props: CanvasProps) => {
    const { children } = props;

    return (
        <BaseCanvas>
            <ZoomControls />
            {children}
        </BaseCanvas>
    );
};
