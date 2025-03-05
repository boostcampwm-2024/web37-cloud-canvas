// src/features/canvas/utils/coordinate.ts

import { CoordPosition, GridPosition, ViewMode } from '../model/canvas.types';

/**
 * 그리드 좌표를 3D 좌표로 변환합니다.
 * @param position 그리드 좌표
 * @param gridWidth 3D 그리드 가로 크기
 * @param gridHeight 3D 그리드 세로 크기
 * @returns 3D 좌표
 */
export const gridTo3DCoord = (
    position: GridPosition,
    gridWidth: number,
    gridHeight: number,
): CoordPosition => {
    const { col, row } = position;
    const halfGridWidth = gridWidth / 2;
    const halfGridHeight = gridHeight / 2;

    return {
        x: (col - row) * halfGridWidth,
        y: (col + row) * halfGridHeight,
    };
};

/**
 * 3D 좌표를 그리드 좌표로 변환합니다.
 * @param position 3D 좌표
 * @param gridWidth 3D 그리드 가로 크기
 * @param gridHeight 3D 그리드 세로 크기
 * @returns 그리드 좌표
 */
export const coordTo3DGrid = (
    position: CoordPosition,
    gridWidth: number,
    gridHeight: number,
): GridPosition => {
    const { x, y } = position;
    const halfGridWidth = gridWidth / 2;
    const halfGridHeight = gridHeight / 2;

    return {
        col: (x / halfGridWidth + y / halfGridHeight) / 2,
        row: (y / halfGridHeight - x / halfGridWidth) / 2,
    };
};

/**
 * 그리드 좌표를 2D 좌표로 변환합니다.
 * @param position 그리드 좌표
 * @param gridSize 2D 그리드 크기
 * @returns 2D 좌표
 */
export const gridTo2DCoord = (
    position: GridPosition,
    gridSize: number,
): CoordPosition => {
    const { col, row } = position;
    return {
        x: col * gridSize,
        y: row * gridSize,
    };
};

/**
 * 2D 좌표를 그리드 좌표로 변환합니다.
 * @param position 2D 좌표
 * @param gridSize 2D 그리드 크기
 * @returns 그리드 좌표
 */
export const coordTo2DGrid = (
    position: CoordPosition,
    gridSize: number,
): GridPosition => {
    const { x, y } = position;
    return {
        col: x / gridSize,
        row: y / gridSize,
    };
};

/**
 * 그리드 좌표를 좌표로 변환합니다.
 * @param position 그리드 좌표
 * @param viewMode 뷰 모드
 * @param gridWidth 3D 그리드 가로 크기 (3D 모드인 경우)
 * @param gridHeight 3D 그리드 세로 크기 (3D 모드인 경우)
 * @param gridSize 2D 그리드 크기 (2D 모드인 경우)
 * @returns 좌표
 */
export const gridToCoord = (
    position: GridPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
): CoordPosition => {
    if (viewMode === '3d') {
        return gridTo3DCoord(position, gridWidth, gridHeight);
    } else {
        return gridTo2DCoord(position, gridSize);
    }
};

/**
 * 좌표를 그리드 좌표로 변환합니다.
 * @param position 좌표
 * @param viewMode 뷰 모드
 * @param gridWidth 3D 그리드 가로 크기 (3D 모드인 경우)
 * @param gridHeight 3D 그리드 세로 크기 (3D 모드인 경우)
 * @param gridSize 2D 그리드 크기 (2D 모드인 경우)
 * @returns 그리드 좌표
 */
export const coordToGrid = (
    position: CoordPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
): GridPosition => {
    if (viewMode === '3d') {
        return coordTo3DGrid(position, gridWidth, gridHeight);
    } else {
        return coordTo2DGrid(position, gridSize);
    }
};

interface SnapPointResult {
    coord: CoordPosition;
}

/**
 * 좌표를 그리드에 스냅합니다.
 * @param position 좌표
 * @param viewMode 뷰 모드
 * @param gridWidth 3D 그리드 가로 크기 (3D 모드인 경우)
 * @param gridHeight 3D 그리드 세로 크기 (3D 모드인 경우)
 * @param gridSize 2D 그리드 크기 (2D 모드인 경우)
 * @param denominator 스냅 단위 (기본값: 4)
 * @returns 스냅된 좌표
 */
export const snapPoint = (
    position: CoordPosition,
    viewMode: ViewMode,
    gridWidth: number,
    gridHeight: number,
    gridSize: number,
    denominator: number = 4,
): SnapPointResult => {
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
