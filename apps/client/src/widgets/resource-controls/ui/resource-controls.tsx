import { Link, Trash2Icon } from 'lucide-react';

import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { useControlsPoint } from '../hooks/use-controls-point';

import { ActionButton } from './action-button';

const GAP = 30;

export const ResourceControls = () => {
    const selectedNodeId = useSelectStore.use.selectedNodeId();
    const currentZoom = useCanvasStore.use.zoomFactor();
    const ratio = currentZoom < 1 ? 1 : currentZoom;

    const controlsPoint = useControlsPoint(selectedNodeId, GAP * ratio);

    if (!controlsPoint) return null;

    return (
        <g
            transform={`translate(${controlsPoint.x},${controlsPoint.y}) scale(${ratio})`}
        >
            <ActionButton label="connect" icon={Link} y={-25} />
            <ActionButton label="delete" icon={Trash2Icon} y={25} />
        </g>
    );
};
