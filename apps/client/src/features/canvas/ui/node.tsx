import { Suspense } from 'react';

import type { Node as NodeType } from '@/entities/canvas/model/node.types';

import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import { isSingleSize } from '@/shared/canvas/lib/size';
import type { ViewMode } from '@/shared/canvas/types';

import { useDragNode } from '../hooks/use-drag-node';
import { useCanvasState } from '../model/context';

interface NodeProps {
    node: NodeType;
    viewMode: ViewMode;
}

export const Node = (props: NodeProps) => {
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

        const handleMouseMove = (event: MouseEvent) => {
            moveDrag({ x: event.clientX, y: event.clientY });
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
        <g
            id={node.id}
            transform={transform}
            onMouseDown={handleMouseDown}
            data-type="node"
        >
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
