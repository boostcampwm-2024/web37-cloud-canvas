import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';
import { findNearestConnector } from '../lib/connector';

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

    return (
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
        />
    );
};
