import { useCallback, useMemo } from 'react';

import { IsoMatrix } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import type { GridPoint, ViewMode } from '@/shared/types/canvas';

interface EdgeProps {
    id?: string;
    viewMode: ViewMode;
    sourcePoint: GridPoint;
    targetPoint: GridPoint;
    bezierPoints?: Array<GridPoint>;
    onSelect?: () => void;
    onSplit?: (event: React.MouseEvent, idx: number) => void;
}

export const Edge = (props: EdgeProps) => {
    const {
        id,
        viewMode,
        sourcePoint,
        targetPoint,
        bezierPoints = [],
        onSelect,
        onSplit,
    } = props;

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

    const handleClick = (event: React.MouseEvent, idx: number) => {
        onSelect?.();
        if (event.shiftKey) {
            onSplit?.(event, idx);
        }
    };

    const points = useMemo(() => {
        const gridPoints = [sourcePoint, ...bezierPoints, targetPoint];
        return gridPoints.map((point) => transformPoint(point));
    }, [sourcePoint, bezierPoints, targetPoint, transformPoint]);

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

            {points.slice(0, -1).map((source, idx) => {
                const target = points[idx + 1];
                const isLast = idx === points.length - 2;
                return (
                    <line
                        key={`${id}-${idx}`}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        stroke="black"
                        strokeWidth={3}
                        markerEnd={isLast ? 'url(#arrow)' : undefined}
                        className="cursor-pointer"
                        onClick={(event) => handleClick(event, idx)}
                    />
                );
            })}
        </g>
    );
};
