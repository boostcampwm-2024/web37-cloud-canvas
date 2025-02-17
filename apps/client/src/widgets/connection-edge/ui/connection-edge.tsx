import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';
import { findNearestConnector } from '@/shared/lib/canvas/connector';

interface ConnectionEdgeProps {
    id: string;
    sourceId: string;
    targetId: string;
}
export const ConnectionEdge = (props: ConnectionEdgeProps) => {
    const viewMode = useCanvasStore.use.viewMode();
    const { id, sourceId, targetId } = props;
    const { getNode } = useNodeStore.use.actions();

    const targetNode = getNode(targetId)!;
    const sourceNode = getNode(sourceId)!;

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

    return (
        <Edge
            viewMode={viewMode}
            sourcePoint={
                findNearestConnector(sourceConnectorsPoint, targetNode.point)
                    .point
            }
            targetPoint={
                findNearestConnector(targetConnectorsPoint, sourceNode.point)
                    .point
            }
        />
    );
};
