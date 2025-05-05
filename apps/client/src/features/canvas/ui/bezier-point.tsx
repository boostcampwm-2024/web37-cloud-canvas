import { useMemo } from 'react';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import {
    gridToCoordPosition,
    snapPosition,
} from '@/shared/canvas/lib/position';
import { screenToSvgPosition } from '@/shared/canvas/lib/svg';
import type {
    CoordPosition,
    GridPosition,
    ViewMode,
} from '@/shared/canvas/types';

import { useCanvasState } from '../model/context';
import { useCanvasStore } from '../model/store';

interface BezierPointProps {
    edgeId: string;
    idx: number;
    position: GridPosition;
    viewMode: ViewMode;
}

export const BezierPoint = (props: BezierPointProps) => {
    const { position, edgeId, idx, viewMode } = props;

    const { canvasRef } = useCanvasState();
    const { moveBezierPoint } = useCanvasStore.use.edgeActions();

    const moveDrag = (position: CoordPosition) => {
        if (!canvasRef.current) return;
        const svgPosition = screenToSvgPosition(canvasRef.current, position);

        const snappedPoint = snapPosition(svgPosition, viewMode);
        moveBezierPoint(edgeId, idx, snappedPoint.grid);
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();

        const handleMouseMove = (event: MouseEvent) => {
            moveDrag({ x: event.clientX, y: event.clientY });
        };

        const handleMouseUp = () => {
            canvasRef.current?.removeEventListener(
                'mousemove',
                handleMouseMove,
            );
            canvasRef.current?.removeEventListener('mouseup', handleMouseUp);
            canvasRef.current?.removeEventListener('mouseleave', handleMouseUp);
        };

        canvasRef.current?.addEventListener('mousemove', handleMouseMove);
        canvasRef.current?.addEventListener('mouseup', handleMouseUp);
        canvasRef.current?.addEventListener('mouseleave', handleMouseUp);
    };

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

    return (
        <circle
            cx={transformPosition.x}
            cy={transformPosition.y}
            r={5}
            onMouseDown={handleMouseDown}
        />
    );
};
