import { Link, Trash2Icon } from 'lucide-react';

import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { useControlsPoint } from '../hooks/use-controls-point';

import { ActionButton } from './action-button';
import { useEdgeStore } from '@/entities/edge/model/edge.store';

const GAP = 30;

interface ResourceControlsProps {
    selectedId: string;
}

export const ResourceControls = (props: ResourceControlsProps) => {
    const { selectedId } = props;

    const currentZoom = useCanvasStore.use.zoomFactor();
    const nodes = useNodeStore.use.nodes();

    const deselect = useSelectStore.use.deselect();
    const { removeResource } = useResourceStore.use.actions();
    const { removeNode } = useNodeStore.use.actions();
    const { startConnection } = useEdgeStore.use.actions();

    const ratio = currentZoom < 1 ? 1 : currentZoom;

    const controlsPoint = useControlsPoint(selectedId, GAP * ratio);

    const handleRemoveAction = () => {
        const removedNodes = removeNode(selectedId);
        removeResource(...(removedNodes ?? []));
        deselect();
    };

    const handleConnectAction = () => {
        const node = nodes[selectedId];
        // console.log(node.connections);
        // node point를 가져옴
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
