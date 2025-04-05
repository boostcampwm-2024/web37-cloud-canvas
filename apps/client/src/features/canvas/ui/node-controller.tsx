import { Link, Trash2Icon } from 'lucide-react';
import { useMemo } from 'react';

import { GRID_SIZE_2D, GRID_WIDTH_3D } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import { isSingleSize } from '@/shared/canvas/lib/size';

import { useConnectEdge } from '../hooks/use-connect-edge';
import { useCanvasState } from '../model/context';
import { useCanvasStore } from '../model/store';

import { ActionButton } from './action-button';

const GAP = 30;

interface NodeController {
    selectedId: string;
}

export const NodeController = (props: NodeController) => {
    const { selectedId } = props;
    const { canvasRef } = useCanvasState();

    const { viewMode, zoomFactor } = useCanvasState();

    const { deselect } = useCanvasStore.use.selectionActions();
    const { getNode } = useCanvasStore.use.nodeActions();
    const { startConnectEdge, progressConnectEdge, finalizeConnectEdge } =
        useConnectEdge(canvasRef.current, viewMode);

    const node = getNode(selectedId)!;
    const ratio = zoomFactor < 1 ? 1 : zoomFactor;

    const handleRemoveNodeAction = () => {
        deselect();
    };

    const handleStartConnectAction = (event: React.MouseEvent) => {
        const mousePosition = { x: event.clientX, y: event.clientY };
        startConnectEdge(selectedId, mousePosition);
        deselect();

        const handleMouseMove = (event: MouseEvent) => {
            const mousePosition = { x: event.clientX, y: event.clientY };
            const nodeEl: SVGElement | null = (
                event.target as SVGElement
            ).closest('[data-type="node"]');

            progressConnectEdge(mousePosition, nodeEl, viewMode);
        };

        const handleMouseUp = () => {
            finalizeConnectEdge();
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

    const controlsPoint = useMemo(() => {
        const size2D = isSingleSize(node.size) ? node.size : node.size['2d'];
        const size3D = isSingleSize(node.size) ? node.size : node.size['3d'];

        const width =
            viewMode === '2d'
                ? GRID_SIZE_2D * size2D.cols
                : GRID_WIDTH_3D * size3D.cols;

        const pixels = gridToCoordPosition(node.position, viewMode);

        //INFO: block 형태는 그리는 기준점이 달라 필터처리
        const margin = viewMode === '3d' ? width / 2 : width;

        return {
            x: pixels.x + margin + GAP * ratio,
            y: pixels.y,
        };
    }, [node, viewMode, ratio]);

    return (
        <g
            transform={`translate(${controlsPoint.x},${controlsPoint.y}) scale(${ratio})`}
        >
            <ActionButton
                label="connect"
                icon={Link}
                y={-25}
                onAction={handleStartConnectAction}
            />
            <ActionButton
                label="remove"
                icon={Trash2Icon}
                y={25}
                onAction={handleRemoveNodeAction}
            />
        </g>
    );
};
