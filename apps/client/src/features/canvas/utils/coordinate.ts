import type {
    CoordPosition,
    GridPosition,
    ViewMode,
} from '../model/canvas.types';

export const gridTo3DCoord = (
    position: GridPosition,
    gridWidth: number,
    gridHeight: number,
) => {
    const { col, row } = position;
    const halfGridWidth = gridWidth / 2;
    const halfGridHeight = gridHeight / 2;

    return {
        x: (col - row) * halfGridWidth,
        y: (col + row) * halfGridHeight,
    };
};

export const coordTo3DGrid = (
    position: CoordPosition,
    gridWidth: number,
    gridHeight: number,
) => {
    const { x, y } = position;
    const halfGridWidth = gridWidth / 2;
    const halfGridHeight = gridHeight / 2;

    return {
        col: (x / halfGridWidth + y / halfGridHeight) / 2,
        row: (y / halfGridHeight - x / halfGridWidth) / 2,
    };
};
export const gridTo2DCoord = (position: GridPosition, gridSize: number) => {
    const { col, row } = position;
    return {
        x: col * gridSize,
        y: row * gridSize,
    };
};

export const coordTo2DGrid = (position: CoordPosition, gridSize: number) => {
    const { x, y } = position;
    return {
        col: x / gridSize,
        row: y / gridSize,
    };
};

export const gridToCoord = (
    position: GridPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
) => {
    if (viewMode === '3d') {
        return gridTo3DCoord(position, gridWidth, gridHeight);
    } else {
        return gridTo2DCoord(position, gridSize);
    }
};

export const coordToGrid = (
    position: CoordPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
) => {
    if (viewMode === '3d') {
        return coordTo3DGrid(position, gridWidth, gridHeight);
    } else {
        return coordTo2DGrid(position, gridSize);
    }
};

export const snapPoint = (
    position: CoordPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
    denominator: number = 4,
) => {
    const gridPoint = coordToGrid(
        position,
        viewMode,
        gridWidth,
        gridHeight,
        gridSize,
    );
    const snappedSize = 1 / denominator;

    const snappedCol = Math.round(gridPoint.col / snappedSize) * snappedSize;
    const snappedRow = Math.round(gridPoint.row / snappedSize) * snappedSize;

    return {
        coord: gridToCoord(
            { col: snappedCol, row: snappedRow },
            viewMode,
            gridWidth,
            gridHeight,
            gridSize,
        ),
    };
};
