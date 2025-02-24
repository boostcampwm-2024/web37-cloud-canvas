import { useCallback, useEffect, useState } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';
import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';

import { coordToGridPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { GridPoint } from '@/shared/types/canvas';

import { findNearestConnector } from '../lib/connector';

export const ConnectionDraftEdge = () => {
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

    const handleConnect = useCallback(
        (event: MouseEvent) => {
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
                targetPoint = findNearestConnector(
                    targetNode.connectors[viewMode],
                    targetNode.point,
                    gridCursorPoint,
                ).point;
            }

            const sourceNode = getNode(draftEdge.sourceId)!;
            sourcePoint = findNearestConnector(
                sourceNode.connectors[viewMode],
                sourceNode.point,
                targetPoint,
            ).point;
            console.log(sourcePoint);

            setEdgePoints({
                source: sourcePoint,
                target: targetPoint,
            });
            progressDraftEdge(targetId);
        },
        [
            draftEdge.sourceId,
            edgePoints.source,
            viewMode,
            getCanvasEl,
            getNode,
            progressDraftEdge,
        ],
    );

    const handleFinalize = useCallback(
        () => finalizeDraftEdge(),
        [finalizeDraftEdge],
    );

    useEffect(() => {
        const $canvas = getCanvasEl();
        $canvas?.addEventListener('mousemove', handleConnect);
        $canvas?.addEventListener('mousedown', handleFinalize);
        $canvas?.addEventListener('mouseleave', handleFinalize);

        return () => {
            $canvas?.removeEventListener('mousemove', handleConnect);
            $canvas?.removeEventListener('mousedown', handleFinalize);
            $canvas?.removeEventListener('mouseleave', handleFinalize);
        };
    }, [handleConnect, getCanvasEl, handleFinalize]);

    return (
        <Edge
            viewMode={viewMode}
            sourcePoint={edgePoints.source}
            targetPoint={edgePoints.target}
            bezierPoints={[]}
        />
    );
};
