import { useMemo } from 'react';

import type { DraftEdge } from '@/entities/canvas/model/edge.types';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import type { ViewMode } from '@/shared/canvas/types';

import { convertGridToViewCoordinates } from '../lib/edge';
import { getNeaerestConnector } from '../lib/node';
import { useCanvasStore } from '../model/store';

interface DraftEdgeRendererProps {
    draftEdge: DraftEdge;
    viewMode: ViewMode;
}

export const DraftEdgeRenderer = (props: DraftEdgeRendererProps) => {
    const { draftEdge, viewMode } = props;
    const { getNode } = useCanvasStore.use.nodeActions();

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

        return convertGridToViewCoordinates(gridPosition, viewMode);
    }, [draftEdge, viewMode, getNode]);

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

            return convertGridToViewCoordinates(gridPosition, viewMode);
        } else {
            return convertGridToViewCoordinates(
                draftEdge.endPosition,
                viewMode,
            );
        }
    }, [draftEdge, viewMode, getNode]);

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
