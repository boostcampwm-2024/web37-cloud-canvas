import type { CoordPoint, GridPoint } from '@/shared/types/canvas';

export const calcGridDistance = (
    sourcePoint: GridPoint,
    targetPoint: GridPoint,
) => {
    return Math.sqrt(
        Math.pow(sourcePoint.col - targetPoint.col, 2) +
            Math.pow(sourcePoint.row - targetPoint.row, 2),
    );
};

export const calcCoordDistance = (
    sourcePoint: CoordPoint,
    targetPoint: CoordPoint,
) => {
    return Math.sqrt(
        Math.pow(sourcePoint.x - targetPoint.x, 2) +
            Math.pow(sourcePoint.y - targetPoint.y, 2),
    );
};
