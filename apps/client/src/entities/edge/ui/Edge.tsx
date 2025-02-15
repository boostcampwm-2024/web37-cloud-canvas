import { IsoMatrix } from '@/shared/config/canvas';
import { CoordPoint, ViewMode } from '@/shared/types/canvas';
import { useMemo } from 'react';

interface EdgeProps {
    viewMode: ViewMode;
    source: CoordPoint;
    target: CoordPoint;
}

export const Edge = (props: EdgeProps) => {
    const { viewMode, source, target } = props;

    const transform = viewMode === '3d' ? IsoMatrix?.toString() : undefined;

    const transformedTarget = useMemo(() => {
        if (viewMode !== '3d' || !IsoMatrix) return target;

        // IsoMatrix의 역행렬을 구합니다
        const inverseMatrix = IsoMatrix.inverse();

        // target point를 DOMPoint로 변환
        const targetPoint = new DOMPoint(target.x, target.y);

        // 역변환을 적용
        const transformedPoint = targetPoint.matrixTransform(inverseMatrix);

        return {
            x: transformedPoint.x,
            y: transformedPoint.y,
        };
    }, [viewMode, target]);

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
                x1={source.x}
                y1={source.y}
                x2={transformedTarget.x}
                y2={transformedTarget.y}
                stroke="black"
                marker-end="url(#arrow)"
            />
        </g>
    );
};
