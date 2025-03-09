import _ from 'lodash';

import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { DROP_OPTIONS } from '../config/drop-resource';
import { useDragStore } from '../model/drag.store';

export const useDrop = (nodeId: string) => {
    const { getResource } = useResourceStore.use.actions();

    const draggedId = useDragStore.use.draggedId();
    const { removeChildNode, addChildNode, updateNodeLayout } =
        useNodeStore.use.actions();

    const getDropOption = () => {
        const dropZoneResource = getResource(nodeId);
        return DROP_OPTIONS[dropZoneResource.properties.type];
    };

    const leaveDropZone = () => {
        if (!draggedId) return;
        const options = getDropOption();
        const draggedResource = getResource(draggedId);
        if (!options.accepts.includes(draggedResource.properties.type)) return;

        _.debounce(() => {
            removeChildNode(nodeId, draggedId);
            updateNodeLayout(nodeId, {
                layoutType: options.layoutType,
                padding: options.padding,
            });
        }, 100)();
    };

    const dropDropZone = () => {
        if (!draggedId) return;

        const options = getDropOption();
        const resource = getResource(draggedId);

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
