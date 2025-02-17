import { IsoMatrix } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import { GridPoint, ViewMode } from '@/shared/types/canvas';
import { useCallback, useMemo } from 'react';

interface EdgeProps {
    id?: string;
    viewMode: ViewMode;
    sourcePoint: GridPoint;
    targetPoint: GridPoint;
}

export const Edge = (props: EdgeProps) => {
    const { id, viewMode, sourcePoint, targetPoint } = props;

    const transform = viewMode === '3d' ? IsoMatrix?.toString() : undefined;

    const transformPoint = useCallback(
        (point: GridPoint) => {
            const coordPoint = gridToCoordPoint(point, viewMode);

            if (viewMode !== '3d' || !IsoMatrix) {
                return coordPoint;
            }

            const domPoint = new DOMPoint(coordPoint.x, coordPoint.y);
            const transformedPoint = domPoint.matrixTransform(
                IsoMatrix.inverse(),
            );

            return {
                x: transformedPoint.x,
                y: transformedPoint.y,
            };
        },
        [viewMode],
    );

    const transformedSource = useMemo(
        () => transformPoint(sourcePoint),
        [transformPoint, sourcePoint],
    );

    const transformedTarget = useMemo(
        () => transformPoint(targetPoint),
        [transformPoint, targetPoint],
    );

    return (
        <g id={id} transform={transform}>
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
                x1={transformedSource.x}
                y1={transformedSource.y}
                x2={transformedTarget.x}
                y2={transformedTarget.y}
                stroke="black"
                markerEnd="url(#arrow)"
            />
        </g>
    );
};
