import { GRID_HEIGHT_3D, GRID_SIZE_2D, GRID_WIDTH_3D } from '../constants';
import type { CoordPosition, GridPosition, ViewMode } from '../types';

export const gridTo3DCoordPosition = (position: GridPosition) => {
    const { col, row } = position;
    const halfGridWidth = GRID_WIDTH_3D / 2;
    const halfGridHeight = GRID_HEIGHT_3D / 2;

    return {
        x: (col - row) * halfGridWidth,
        y: (col + row) * halfGridHeight,
    };
};

export const coordTo3DGridPosition = (position: CoordPosition) => {
    const { x, y } = position;
    const halfGridWidth = GRID_WIDTH_3D / 2;
    const halfGridHeight = GRID_HEIGHT_3D / 2;

    return {
        col: (x / halfGridWidth + y / halfGridHeight) / 2,
        row: (y / halfGridHeight - x / halfGridWidth) / 2,
    };
};

export const gridTo2DCoordPosition = (position: GridPosition) => {
    const { col, row } = position;
    return {
        x: col * GRID_SIZE_2D,
        y: row * GRID_SIZE_2D,
    };
};

export const coordTo2DGridPosition = (position: CoordPosition) => {
    const { x, y } = position;
    return {
        col: x / GRID_SIZE_2D,
        row: y / GRID_SIZE_2D,
    };
};

export const snapPosition = (
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
