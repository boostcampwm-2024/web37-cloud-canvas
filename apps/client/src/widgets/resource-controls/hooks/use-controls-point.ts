'use client';

import { useMemo } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';

import { GRID_SIZE_2D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import { getCenterGridPoint } from '@/shared/lib/canvas/svg';

export const useControlsPoint = (nodeId: string | null, gap: number) => {
    const nodes = useNodeStore.use.nodes();
    const viewMode = useCanvasStore.use.viewMode();

    return useMemo(() => {
        if (!nodeId) return null;

        const node = nodes[nodeId];
        const cols = node.size[viewMode].cols;
        const centerPoint = getCenterGridPoint(node.point, node.size[viewMode]);

        const width =
            viewMode === '2d' ? GRID_SIZE_2D * cols : GRID_WIDTH_3D * cols;

        const pixels = gridToCoordPoint(centerPoint, viewMode);

        //INFO: block 형태는 그리는 기준점이 달라 필터처리
        const margin = viewMode === '3d' ? width / 2 : width;

        return {
            x: pixels.x + margin + gap,
            y: pixels.y,
        };
    }, [nodeId, nodes, viewMode, gap]);
};
