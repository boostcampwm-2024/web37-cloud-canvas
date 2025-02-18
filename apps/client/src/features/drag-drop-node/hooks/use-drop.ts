import _ from 'lodash';

import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { DROP_OPTIONS } from '../config/drop-resource';
import { useDragStore } from '../model/drag.store';

export const useDrop = (nodeId: string) => {
    const resources = useResourceStore.use.resources();

    const draggedId = useDragStore.use.draggedId();
    const { removeChildNode, addChildNode, updateNodeLayout } =
        useNodeStore.use.actions();

    const getDropOption = () => {
        const dropZoneResource = resources[nodeId];
        return DROP_OPTIONS[dropZoneResource.properties.type];
    };

    const leaveDropZone = () => {
        if (!draggedId) return;

        _.debounce(() => {
            const options = getDropOption();
            removeChildNode(nodeId, draggedId);
            updateNodeLayout(nodeId, {
                layoutType: options.layoutType,
                padding: options.padding,
            });
        }, 500);
    };

    const dropDropZone = () => {
        if (!draggedId) return;

        const options = getDropOption();
        const resource = resources[draggedId];

        if (options.accepts.includes(resource.properties.type)) {
            addChildNode(nodeId, draggedId);
            updateNodeLayout(nodeId, {
                layoutType: options.layoutType,
                padding: options.padding,
            });
        }
    };

    return {
        leaveDropZone,
        dropDropZone,
    };
};
