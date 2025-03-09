import { Link, Trash2Icon } from 'lucide-react';

import { DROP_OPTIONS } from '@/features/drag-drop-node/config/drop-resource';
import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';
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

    const { deselect } = useSelectStore.use.actions();
    const { getResource, removeResource } = useResourceStore.use.actions();
    const { getNode, removeNode, updateNodeLayout } =
        useNodeStore.use.actions();
    const { createDraftEdge } = useEdgeStore.use.actions();

    const ratio = currentZoom < 1 ? 1 : currentZoom;

    const controlsPoint = useControlsPoint(selectedId, GAP * ratio);

    const handleRemoveAction = () => {
        const node = getNode(selectedId);
        const removedNodes = removeNode(selectedId);
        if (node?.parent) {
            const resource = getResource(node.parent);
            const dropOptions = DROP_OPTIONS[resource.properties.type];
            updateNodeLayout(node.parent, {
                layoutType: dropOptions.layoutType,
                padding: dropOptions.padding,
            });
        }
        removeResource(...(removedNodes ?? []));
        deselect();
    };

    const handleConnectAction = () => {
        createDraftEdge(selectedId);
    };

    return (
        <g
            transform={`translate(${controlsPoint.x},${controlsPoint.y}) scale(${ratio})`}
        >
            <ActionButton
                label="connect"
                icon={Link}
                y={-25}
                onAction={handleConnectAction}
            />
            <ActionButton
                label="remove"
                icon={Trash2Icon}
                y={25}
                onAction={handleRemoveAction}
            />
        </g>
    );
};
