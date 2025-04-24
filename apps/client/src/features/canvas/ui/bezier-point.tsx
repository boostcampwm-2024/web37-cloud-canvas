import { useMemo } from 'react';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { GridPosition, ViewMode } from '@/shared/canvas/types';

interface BezierPointProps {
    position: GridPosition;
    viewMode: ViewMode;
}
export const BezierPoint = (props: BezierPointProps) => {
    const { position, viewMode } = props;

    const transformPosition = useMemo(() => {
        const coordPosition = gridToCoordPosition(position, viewMode);

        if (viewMode !== '3d' || !IsoMatrixDOM) {
            return coordPosition;
        }

        const domPoint = new DOMPoint(coordPosition.x, coordPosition.y);
        const transformedPoint = domPoint.matrixTransform(
            IsoMatrixDOM.inverse(),
        );

        return {
            x: transformedPoint.x,
            y: transformedPoint.y,
        };
    }, [position, viewMode]);

    return <circle cx={transformPosition.x} cy={transformPosition.y} r={5} />;
};
