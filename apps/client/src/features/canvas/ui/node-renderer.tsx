import { Suspense } from 'react';

import type { ViewMode } from '@/entities/canvas/model/types';
import type { Node } from '@/entities/node/model/types';

import type { GridSize } from '@/shared/canvas/types';

import { useDragNode } from '../hooks/use-drag-node';
import { useCanvasState } from '../model/context';
import { gridToCoordPoint } from '../model/lib/position';

interface NodeRendererProps {
    node: Node;
    viewMode: ViewMode;
    size: Node['size'];
}

const isSingleSize = (
    size: GridSize | { '2d': GridSize; '3d': GridSize },
): size is GridSize => {
    return !('2d' in size && '3d' in size);
};

export const NodeRenderer = (props: NodeRendererProps) => {
    const { node, viewMode, size } = props;
    const { canvasRef } = useCanvasState();

    const { startDrag, moveDrag, stopDrag } = useDragNode(
        canvasRef.current,
        node.id,
    );

    const Svg2D = node.svg2D;
    const Svg3D = node.svg3D;

    const sizeByViewMode = isSingleSize(size) ? size : size[viewMode];
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

    const coordPoint = gridToCoordPoint(node.position, viewMode);
    const transform = `translate(${coordPoint.x}, ${coordPoint.y})`;
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
        </g>
    );
};
