import { Link, Trash2Icon } from 'lucide-react';

import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { useControlsPoint } from '../hooks/use-controls-point';

import { ActionButton } from './action-button';

const GAP = 30;

interface ResourceControlsProps {
    selectedId: string;
}

export const ResourceControls = (props: ResourceControlsProps) => {
    const { selectedId } = props;

    const currentZoom = useCanvasStore.use.zoomFactor();

    const deselect = useSelectStore.use.deselect();
    const removeResource = useResourceStore.use.removeResource();
    const removeNode = useNodeStore.use.removeNode();

    const ratio = currentZoom < 1 ? 1 : currentZoom;

    const controlsPoint = useControlsPoint(selectedId, GAP * ratio);

    const handleRemoveAction = () => {
        if (!selectedId) return;
        const removedNodes = removeNode(selectedId);
        removeResource(...(removedNodes ?? []));
        deselect();
    };

    return (
        <g
            transform={`translate(${controlsPoint.x},${controlsPoint.y}) scale(${ratio})`}
        >
            <ActionButton label="connect" icon={Link} y={-25} />
            <ActionButton
                label="remove"
                icon={Trash2Icon}
                y={25}
                onAction={handleRemoveAction}
            />
        </g>
    );
};
