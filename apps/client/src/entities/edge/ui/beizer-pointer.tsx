import { useMemo } from 'react';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { IsoMatrix } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import type { GridPoint } from '@/shared/types/canvas';

export interface BezierPointerProps {
    point: GridPoint;
}

export const BezierPointer = (props: BezierPointerProps) => {
    const { point } = props;
    const viewMode = useCanvasStore.use.viewMode();

    const transformPoint = useMemo(() => {
        const coordPoint = gridToCoordPoint(point, viewMode);

        if (viewMode !== '3d' || !IsoMatrix) {
            return coordPoint;
        }

        const domPoint = new DOMPoint(coordPoint.x, coordPoint.y);
        const transformedPoint = domPoint.matrixTransform(IsoMatrix.inverse());

        return {
            x: transformedPoint.x,
            y: transformedPoint.y,
        };
    }, [point, viewMode]);

    const transform = viewMode === '3d' ? IsoMatrix?.toString() : '';

    return (
        <circle
            cx={transformPoint.x}
            cy={transformPoint.y}
            r={5}
            fill="black"
            transform={transform}
        />
    );
};
