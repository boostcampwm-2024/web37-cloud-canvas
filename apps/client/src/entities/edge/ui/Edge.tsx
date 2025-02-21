import { useCallback, useMemo } from 'react';

import { IsoMatrix } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import type { GridPoint, ViewMode } from '@/shared/types/canvas';

interface EdgeProps {
    id?: string;
    viewMode: ViewMode;
    sourcePoint: GridPoint;
    targetPoint: GridPoint;
    onSelect?: () => void;
    onSplit?: (event: React.MouseEvent) => void;
}

export const Edge = (props: EdgeProps) => {
    const { id, viewMode, sourcePoint, targetPoint, onSelect, onSplit } = props;

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

    const handleClick = (event: React.MouseEvent) => {
        onSelect?.();
        if (event.shiftKey) {
            onSplit?.(event);
        }
    };

    return (
        <g id={id} transform={transform}>
            <defs>
                <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
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
                strokeWidth={3}
                markerEnd="url(#arrow)"
                className="cursor-pointer"
                onClick={handleClick}
            />
        </g>
    );
};
