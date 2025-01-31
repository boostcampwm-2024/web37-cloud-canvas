import {
    GRID_HEIGHT_3D,
    GRID_SIZE_2D,
    GRID_WIDTH_3D,
} from '@/shared/config/canvas';
import type { GridPoint, CoordPoint, ViewMode } from '@/shared/types/canvas';

export const gridTo3DCoordPoint = (point: GridPoint) => {
    const { col, row } = point;
    const halfGridWidth = GRID_WIDTH_3D / 2;
    const halfGridHeight = GRID_HEIGHT_3D / 2;

    return {
        x: (col - row) * halfGridWidth,
        y: (col + row) * halfGridHeight,
    };
};
export const coordTo3DGridPoint = (point: CoordPoint) => {
    const { x, y } = point;
    const halfGridWidth = GRID_WIDTH_3D / 2;
    const halfGridHeight = GRID_HEIGHT_3D / 2;

    return {
        col: (x / halfGridWidth + y / halfGridHeight) / 2,
        row: (y / halfGridHeight - x / halfGridWidth) / 2,
    };
};

export const gridTo2DCoordPoint = (point: GridPoint) => {
    const { col, row } = point;
    return {
        x: col * GRID_SIZE_2D,
        y: row * GRID_SIZE_2D,
    };
};

export const coordTo2DGridPoint = (point: CoordPoint) => {
    const { x, y } = point;
    return {
        col: x / GRID_SIZE_2D,
        row: y / GRID_SIZE_2D,
    };
};

export const gridToCoordPoint = (point: GridPoint, viewMode: ViewMode) => {
    return viewMode === '3d'
        ? gridTo3DCoordPoint(point)
        : gridTo2DCoordPoint(point);
};

export const coordToGridPoint = (point: CoordPoint, viewMode: ViewMode) => {
    return viewMode === '3d'
        ? coordTo3DGridPoint(point)
        : coordTo2DGridPoint(point);
};

export const snapPoint = (
    point: CoordPoint,
    viewMode: ViewMode,
    denominator = 4,
) => {
    const gridPoint = coordToGridPoint(point, viewMode);
    const snappedSize = 1 / denominator;

    const snappedCol = Math.round(gridPoint.col / snappedSize) * snappedSize;
    const snappedRow = Math.round(gridPoint.row / snappedSize) * snappedSize;

    return {
        coord: gridToCoordPoint({ col: snappedCol, row: snappedRow }, viewMode),
        grid: { col: snappedCol, row: snappedRow },
    };
};
