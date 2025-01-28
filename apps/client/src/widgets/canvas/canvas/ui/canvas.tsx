'use client';

import type { ReactNode } from 'react';

import { ZoomPanHandler } from '@/features/zoom-pan-canvas/ui/zoom-pan-handler';

import { BaseCanvas } from '@/entities/canvas/ui/base-canvas';

interface CanvasProps {
    children: ReactNode;
}

export const Canvas = (props: CanvasProps) => {
    const { children } = props;

    return (
        <BaseCanvas>
            <ZoomPanHandler />
            {children}
        </BaseCanvas>
    );
};
