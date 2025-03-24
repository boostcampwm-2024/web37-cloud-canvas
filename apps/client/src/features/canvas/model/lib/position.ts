import type { ViewMode } from '@/entities/canvas/model/canvas.types';

import {
    coordTo2DGridPosition,
    coordTo3DGridPosition,
    gridTo2DCoordPosition,
    gridTo3DCoordPosition,
} from '@/shared/canvas/lib/position';
import type { CoordPosition, GridPosition } from '@/shared/canvas/types';

export const snapPoint = (
    position: CoordPosition,
    viewMode: ViewMode,
    denominator = 4,
) => {
    const gridPoint = coordToGridPosition(position, viewMode);
    const snappedSize = 1 / denominator;

    const snappedCol = Math.round(gridPoint.col / snappedSize) * snappedSize;
    const snappedRow = Math.round(gridPoint.row / snappedSize) * snappedSize;

    return {
        coord: gridToCoordPosition(
            { col: snappedCol, row: snappedRow },
            viewMode,
        ),
        grid: { col: snappedCol, row: snappedRow },
    };
};

export const gridToCoordPosition = (
    position: GridPosition,
    viewMode: ViewMode,
) => {
    return viewMode === '3d'
        ? gridTo3DCoordPosition(position)
        : gridTo2DCoordPosition(position);
};

export const coordToGridPosition = (
    position: CoordPosition,
    viewMode: ViewMode,
) => {
    return viewMode === '3d'
        ? coordTo3DGridPosition(position)
        : coordTo2DGridPosition(position);
};
