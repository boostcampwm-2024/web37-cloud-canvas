import { useEffect, useState } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';
import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';

import { findNearestConnector } from '@/shared/lib/canvas/connector';
import { coordToGridPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { GridPoint } from '@/shared/types/canvas';

export const DraftEdge = () => {
    const viewMode = useCanvasStore.use.viewMode();
    const draftEdge = useEdgeStore.use.draftEdge()!;
    const { progressDraftEdge, finalizeDraftEdge } = useEdgeStore.use.actions();
    const { getCanvasEl } = useCanvasContext();
    const { getNode } = useNodeStore.use.actions();

    const [edgePoints, setEdgePoints] = useState<{
        source: GridPoint;
        target: GridPoint;
    }>(() => {
        const { sourceId } = draftEdge;
        const sourceNode = getNode(sourceId)!;

        const centerPoint = {
            col: sourceNode.point.col + sourceNode.size[viewMode].cols / 2,
            row: sourceNode.point.row + sourceNode.size[viewMode].rows / 2,
        };

        return {
            source: centerPoint,
            target: centerPoint,
        };
    });

    const handleConnect = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const svgPoint = screenToSvgPoint(getCanvasEl(), {
            x: clientX,
            y: clientY,
        });
        const gridCursorPoint = coordToGridPoint(svgPoint, viewMode);

        let sourcePoint = edgePoints.source;
        let targetPoint = gridCursorPoint;

        const target = event.target as SVGGElement;
        const targetId = target.closest('[data-canvas-type="node"]')?.id;
        if (targetId) {
            const targetNode = getNode(targetId)!;
            const targetConnectorsPoint = targetNode.connectors[viewMode].map(
                (connector) => {
                    return {
                        ...connector,
                        point: {
                            col: targetNode.point.col + connector.point.col,
                            row: targetNode.point.row + connector.point.row,
                        },
                    };
                },
            );

            targetPoint = findNearestConnector(
                targetConnectorsPoint,
                gridCursorPoint,
            ).point;
        }

        const sourceNode = getNode(draftEdge.sourceId)!;
        const sourceConnectorsPoint = sourceNode.connectors[viewMode].map(
            (connector) => {
                return {
                    ...connector,
                    point: {
                        col: sourceNode.point.col + connector.point.col,
                        row: sourceNode.point.row + connector.point.row,
                    },
                };
            },
        );
        sourcePoint = findNearestConnector(
            sourceConnectorsPoint,
            targetPoint,
        ).point;
        setEdgePoints({
            source: sourcePoint,
            target: targetPoint,
        });
        progressDraftEdge(targetId);
    };

    const handleMouseLeave = () => finalizeDraftEdge();

    const handleMouseDown = () => finalizeDraftEdge();

    useEffect(() => {
        const $canvas = getCanvasEl();
        $canvas?.addEventListener('mousemove', handleConnect);
        $canvas?.addEventListener('mousedown', handleMouseDown);
        $canvas?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            $canvas?.removeEventListener('mousemove', handleConnect);
            $canvas?.removeEventListener('mousedown', handleMouseDown);
            $canvas?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <Edge
                viewMode={viewMode}
                sourcePoint={edgePoints.source}
                targetPoint={edgePoints.target}
            />
        </>
    );
};
