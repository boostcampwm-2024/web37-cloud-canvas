import { IsoMatrix } from '@/shared/config/canvas';
import type { CoordPoint, ViewMode } from '@/shared/types/canvas';

export const transformInversePoint = (
    point: CoordPoint,
    viewMode: ViewMode,
) => {
    if (viewMode !== '3d' || !IsoMatrix) {
        return point;
    }

    const domPoint = new DOMPoint(point.x, point.y);
    const transformedPoint = domPoint.matrixTransform(IsoMatrix.inverse());

    return {
        x: transformedPoint.x,
        y: transformedPoint.y,
    };
};
