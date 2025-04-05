import { IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { GridPosition, ViewMode } from '@/shared/canvas/types';

export const convertGridToViewCoordinates = (
    position: GridPosition,
    viewMode: ViewMode,
) => {
    const coordPoint = gridToCoordPosition(position, viewMode);

    if (viewMode !== '3d') {
        return coordPoint;
    }

    const domPoint = new DOMPoint(coordPoint.x, coordPoint.y);
    const transformedPoint = domPoint.matrixTransform(IsoMatrixDOM?.inverse());

    return {
        x: transformedPoint.x,
        y: transformedPoint.y,
    };
};
