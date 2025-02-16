import { IsoMatrix } from '@/shared/config/canvas';
import { CoordPoint, ViewMode } from '@/shared/types/canvas';
import { useMemo } from 'react';

interface EdgeProps {
    viewMode: ViewMode;
    sourcePoint: CoordPoint;
    targetPoint: CoordPoint;
}

export const Edge = (props: EdgeProps) => {
    const { viewMode, sourcePoint, targetPoint } = props;

    const transform = viewMode === '3d' ? IsoMatrix?.toString() : undefined;

    const transformedTarget = useMemo(() => {
        if (viewMode !== '3d' || !IsoMatrix) return targetPoint;

        const inverseMatrix = IsoMatrix.inverse();

        const targetSVGPoint = new DOMPoint(targetPoint.x, targetPoint.y);

        const transformedPoint = targetSVGPoint.matrixTransform(inverseMatrix);

        return {
            x: transformedPoint.x,
            y: transformedPoint.y,
        };
    }, [viewMode, targetPoint]);

    return (
        <g transform={transform}>
            <defs>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="10"
                    refY="5"
                    markerWidth="15"
                    markerHeight="15"
                    orient="auto-start-reverse"
                >
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
            </defs>

            <line
                x1={sourcePoint.x}
                y1={sourcePoint.y}
                x2={transformedTarget.x}
                y2={transformedTarget.y}
                stroke="black"
                marker-end="url(#arrow)"
            />
        </g>
    );
};
