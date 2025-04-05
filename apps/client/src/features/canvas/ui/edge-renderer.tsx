import { useCallback, useMemo } from 'react';

import type { Edge } from '@/entities/canvas/model/edge.types';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { GridPosition, ViewMode } from '@/shared/canvas/types';

import { useCanvasStore } from '../model/store';

interface EdgeRendererProps {
    edge: Edge;
    viewMode: ViewMode;
    onSelect?: () => void;
    onSplit?: (event: React.MouseEvent, idx: number) => void;
}

export const EdgeRenderer = (props: EdgeRendererProps) => {
    const { edge, viewMode, onSelect, onSplit } = props;
    const { getNode } = useCanvasStore.use.nodeActions();
    const sourceNode = getNode(edge.sourceNodeId);
    const targetNode = getNode(edge.targetNodeId);

    const transformPosition = useCallback(
        (position: GridPosition) => {
            const coordPoint = gridToCoordPosition(position, viewMode);

            if (viewMode !== '3d') {
                return coordPoint;
            }

            const domPoint = new DOMPoint(coordPoint.x, coordPoint.y);
            const transformedPoint = domPoint.matrixTransform(
                IsoMatrixDOM?.inverse(),
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

    const positions = useMemo(() => {
        if (!sourceNode || !targetNode) return [];

        const gridPositions = [
            sourceNode.position,
            ...edge.bezierPositions,
            targetNode.position,
        ];

        return gridPositions.map((point) => transformPosition(point));
    }, [sourceNode, targetNode, edge, transformPosition]);

    return (
        <g transform={IsoMatrixDOM?.toString()}>
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

            {positions.slice(0, -1).map((source, idx) => {
                const target = positions[idx + 1];
                const isLast = idx === positions.length - 2;
                return (
                    <line
                        key={`${edge.id}-${idx}`}
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
