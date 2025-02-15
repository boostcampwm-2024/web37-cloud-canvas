import { useEffect, useState } from 'react';

import { useCanvasContext } from '@/entities/canvas/model/canvas.context';
import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Edge } from '@/entities/edge/ui/Edge';

import { screenToSvgPoint } from '@/shared/lib/canvas/svg';

export const ConnectionEdge = () => {
    const viewMode = useCanvasStore.use.viewMode();
    const { getCanvasEl } = useCanvasContext();

    const [target, setTarget] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const svgPoint = screenToSvgPoint(getCanvasEl(), {
                x: clientX,
                y: clientY,
            });
            setTarget(svgPoint);
        };

        document.addEventListener('mousemove', handleMove);

        return () => {
            document.removeEventListener('mousemove', handleMove);
        };
    }, []);

    return <Edge viewMode={viewMode} source={{ x: 0, y: 0 }} target={target} />;
};
