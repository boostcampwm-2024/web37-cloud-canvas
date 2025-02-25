import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import {
    BezierPointer,
    type BezierPointerProps,
} from '@/entities/edge/ui/beizer-pointer';

import { useDrag } from '../hooks/use-drag';

interface DraggableBezierPointerProps extends BezierPointerProps {
    edgeId: string;
    bezierIdx: number;
}

export const DraggableBezierPointer = (props: DraggableBezierPointerProps) => {
    const { edgeId, bezierIdx, point } = props;

    const { getCanvasEl } = useCanvasContext();
    const $canvas = getCanvasEl();

    const { startDrag, processDrag, stopDrag } = useDrag(
        $canvas,
        edgeId,
        bezierIdx,
    );

    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        startDrag({ x: event.clientX, y: event.clientY });

        const handleMouseMove = (e: MouseEvent) => {
            processDrag({ x: e.clientX, y: e.clientY });
        };

        const handleMouseUp = () => {
            stopDrag();
            $canvas.removeEventListener('mousemove', handleMouseMove);
            $canvas.removeEventListener('mouseup', handleMouseUp);
        };

        $canvas.addEventListener('mousemove', handleMouseMove);
        $canvas.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <g onMouseDown={handleMouseDown}>
            <BezierPointer point={point} />
        </g>
    );
};
