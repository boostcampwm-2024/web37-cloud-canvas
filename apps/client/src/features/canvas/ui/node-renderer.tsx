import { Suspense } from 'react';

import type { ViewMode } from '@/entities/canvas/model/types';
import type { Node } from '@/entities/node/model/types';

import { isSingleSize } from '@/shared/canvas/lib/size';

import { useDragNode } from '../hooks/use-drag-node';
import { useCanvasState } from '../model/context';
import { gridToCoordPosition } from '../model/lib/position';

interface NodeRendererProps {
    node: Node;
    viewMode: ViewMode;
}

export const NodeRenderer = (props: NodeRendererProps) => {
    const { node, viewMode } = props;
    const { canvasRef } = useCanvasState();

    const { startDrag, moveDrag, stopDrag } = useDragNode(
        canvasRef.current,
        node.id,
    );

    const Svg2D = node.svg2D;
    const Svg3D = node.svg3D;

    const sizeByViewMode = isSingleSize(node.size)
        ? node.size
        : node.size[viewMode];

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDrag({ x: event.clientX, y: event.clientY });

        const handleMouseMove = (e: MouseEvent) => {
            moveDrag({ x: e.clientX, y: e.clientY });
        };

        const handleMouseUp = () => {
            stopDrag();
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

    const coordPoint = gridToCoordPosition(node.position, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;

    const connectorsPositions = node.connectors[viewMode].map((c) => {
        const position = gridToCoordPosition(c.position, viewMode);
        return {
            ...c,
            position,
        };
    });

    return (
        <g transform={transform} onMouseDown={handleMouseDown}>
            {viewMode === '3d' && Svg3D && (
                <Suspense fallback={null}>
                    <Svg3D size={sizeByViewMode} />
                </Suspense>
            )}
            {viewMode === '2d' && Svg2D && (
                <Suspense fallback={null}>
                    <Svg2D size={sizeByViewMode} />
                </Suspense>
            )}
            {connectorsPositions.map((c, i) => (
                <circle key={i} cx={c.position.x} cy={c.position.y} r="5" />
            ))}
        </g>
    );
};
