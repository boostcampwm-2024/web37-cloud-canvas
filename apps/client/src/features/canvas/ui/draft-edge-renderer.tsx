import { useCallback, useMemo } from 'react';

import type { DraftEdge } from '@/entities/canvas/model/edge.types';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { GridPosition, ViewMode } from '@/shared/canvas/types';

import { getNeaerestConnector } from '../lib/node';
import { useCanvasStore } from '../model/store';

interface DraftEdgeRendererProps {
    draftEdge: DraftEdge;
    viewMode: ViewMode;
}

export const DraftEdgeRenderer = (props: DraftEdgeRendererProps) => {
    const { draftEdge, viewMode } = props;
    const { getNode } = useCanvasStore.use.nodeActions();

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

    const sourcePosition = useMemo(() => {
        const sourceNode = getNode(draftEdge.sourceNodeId);
        if (!sourceNode) return null;

        const nearestConnector = getNeaerestConnector(
            sourceNode,
            draftEdge.endPosition,
            viewMode,
        );

        const gridPosition = {
            col: nearestConnector.position.col + sourceNode.position.col,
            row: nearestConnector.position.row + sourceNode.position.row,
        };

        return transformPosition(gridPosition);
    }, [draftEdge, viewMode, getNode, transformPosition]);

    const targetPosition = useMemo(() => {
        if (draftEdge.targetNodeId) {
            const targetNode = getNode(draftEdge.targetNodeId);
            if (!targetNode) return null;

            const nearestConnector = getNeaerestConnector(
                targetNode,
                draftEdge.endPosition,
                viewMode,
            );

            const gridPosition = {
                col: nearestConnector.position.col + targetNode.position.col,
                row: nearestConnector.position.row + targetNode.position.row,
            };

            return transformPosition(gridPosition);
        } else {
            return transformPosition(draftEdge.endPosition);
        }
    }, [draftEdge, viewMode, getNode, transformPosition]);

    console.log(sourcePosition, targetPosition);
    const transform = viewMode === '3d' ? IsoMatrixDOM?.toString() : undefined;
    return (
        <g transform={transform} data-type="draft-edge">
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
                x1={sourcePosition?.x}
                y1={sourcePosition?.y}
                x2={targetPosition?.x}
                y2={targetPosition?.y}
                stroke="black"
                strokeWidth={3}
                markerEnd="url(#arrow)"
            />
        </g>
    );
};
