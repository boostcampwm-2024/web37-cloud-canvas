import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import type { GridSize3D } from '@/shared/types/canvas';

export const generateBlockFaces = (size: Required<GridSize3D>) => {
    const { cols, rows, depth } = size;
    const halfGridWidth = GRID_WIDTH_3D / 2;
    const halfGridHeight = GRID_HEIGHT_3D / 2;
    const totalDepth = GRID_HEIGHT_3D * depth;

    const topLeftPoint = {
        x: 0,
        y: -totalDepth,
    };

    const topRightPoint = {
        x: cols * halfGridWidth,
        y: cols * halfGridHeight - totalDepth,
    };

    const bottomRightPoint = {
        x: cols * halfGridWidth - rows * halfGridWidth,
        y: cols * halfGridHeight + rows * halfGridHeight - totalDepth,
    };

    const bottomLeftPoint = {
        x: -rows * halfGridWidth,
        y: rows * halfGridHeight - totalDepth,
    };

    return {
        top: [topLeftPoint, topRightPoint, bottomRightPoint, bottomLeftPoint],
        left: [
            bottomLeftPoint,
            { x: bottomLeftPoint.x, y: bottomLeftPoint.y + totalDepth },
            { x: bottomRightPoint.x, y: bottomRightPoint.y + totalDepth },
            bottomRightPoint,
        ],
        right: [
            topRightPoint,
            bottomRightPoint,
            { x: bottomRightPoint.x, y: bottomRightPoint.y + totalDepth },
            { x: topRightPoint.x, y: topRightPoint.y + totalDepth },
        ],
    };
};
