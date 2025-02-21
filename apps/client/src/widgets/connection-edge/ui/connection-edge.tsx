import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';
import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';

import { coordToGridPoint, gridToCoordPoint } from '@/shared/lib/canvas/point';
import { screenToSvgPoint } from '@/shared/lib/canvas/svg';
import type { GridPoint } from '@/shared/types/canvas';

import { findNearestConnector } from '../lib/connector';
import { transformInversePoint } from '../lib/point';

interface ConnectionEdgeProps {
    id: string;
    sourceId: string;
    targetId: string;
    beizerPoints: Array<GridPoint>;
}
export const ConnectionEdge = (props: ConnectionEdgeProps) => {
    const { id, sourceId, targetId, beizerPoints } = props;
    const viewMode = useCanvasStore.use.viewMode();
    const { getNode } = useNodeStore.use.actions();
    const { select } = useSelectStore.use.actions();
    const { splitEdge } = useEdgeStore.use.actions();
    const { getCanvasEl } = useCanvasContext();

    const targetNode = getNode(targetId)!;
    const sourceNode = getNode(sourceId)!;

    const handleSplit = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        const svgPoint = screenToSvgPoint(getCanvasEl(), {
            x: clientX,
            y: clientY,
        });

        const mousePoint = transformInversePoint(svgPoint, viewMode);
        const beizerPoint = coordToGridPoint(svgPoint, viewMode);
        splitEdge(id, beizerPoint);
    };

    return (
        <>
            <Edge
                id={id}
                viewMode={viewMode}
                sourcePoint={
                    findNearestConnector(
                        sourceNode.connectors[viewMode],
                        sourceNode.point,
                        targetNode.point,
                    ).point
                }
                targetPoint={
                    findNearestConnector(
                        targetNode.connectors[viewMode],
                        targetNode.point,
                        sourceNode.point,
                    ).point
                }
                onSelect={() => select(id, 'edge')}
                onSplit={handleSplit}
            />
            {beizerPoints.map((point, idx) => {
                const coordPoint = gridToCoordPoint(point, viewMode);
                return (
                    <circle
                        key={idx}
                        cx={coordPoint.x}
                        cy={coordPoint.y}
                        r={5}
                        fill="red"
                    />
                );
            })}
        </>
    );
};
