import { useMemo } from 'react';

import type { Edge as EdgeType } from '@/entities/canvas/model/edge.types';

import { IsoMatrixDOM } from '@/shared/canvas/constants';
import type { ViewMode } from '@/shared/canvas/types';

import { convertGridToViewCoordinates } from '../lib/edge';
import { getNeaerestConnector } from '../lib/node';
import { useCanvasStore } from '../model/store';

interface EdgeProps {
    edge: EdgeType;
    viewMode: ViewMode;
    onSelect?: () => void;
    onSplit?: (event: React.MouseEvent, idx: number) => void;
}

export const Edge = (props: EdgeProps) => {
    const { edge, viewMode, onSelect, onSplit } = props;
    const { getNode } = useCanvasStore.use.nodeActions();
    const sourceNode = getNode(edge.sourceNodeId);
    const targetNode = getNode(edge.targetNodeId);

    const handleClick = (event: React.MouseEvent, idx: number) => {
        onSelect?.();
        if (event.shiftKey) {
            onSplit?.(event, idx);
        }
    };

    const positions = useMemo(() => {
        if (!sourceNode || !targetNode) return [];

        const sourceNeaerestConnector = getNeaerestConnector(
            sourceNode,
            edge.bezierPositions.at(0) ?? targetNode.position,
            viewMode,
        );
        const sourceGridPosition = {
            col: sourceNeaerestConnector.position.col + sourceNode.position.col,
            row: sourceNeaerestConnector.position.row + sourceNode.position.row,
        };

        const targetNeaerestConnector = getNeaerestConnector(
            targetNode,
            edge.bezierPositions.at(-1) ?? sourceNode.position,
            viewMode,
        );

        const targetGridPosition = {
            col: targetNeaerestConnector.position.col + targetNode.position.col,
            row: targetNeaerestConnector.position.row + targetNode.position.row,
        };

        const gridPositions = [
            sourceGridPosition,
            ...edge.bezierPositions,
            targetGridPosition,
        ];

        return gridPositions.map((point) =>
            convertGridToViewCoordinates(point, viewMode),
        );
    }, [edge, sourceNode, targetNode, viewMode]);

    const transform = viewMode === '3d' ? IsoMatrixDOM?.toString() : undefined;

    return (
        <g transform={transform}>
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
