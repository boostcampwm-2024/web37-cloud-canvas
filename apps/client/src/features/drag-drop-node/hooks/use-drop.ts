import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import { DROP_OPTIONS } from '../config/drop-resource';
import { useDragStore } from '../model/drag.store';

export const useDrop = (nodeId: string) => {
    const resources = useResourceStore.use.resources();

    const draggedId = useDragStore.use.draggedId();
    const removeChildNode = useNodeStore.use.removeChildNode();
    const addChildNode = useNodeStore.use.addChildNode();
    const updateNodeLayout = useNodeStore.use.updateNodeLayout();

    const getDropOption = () => {
        const dropZoneResource = resources[nodeId];
        return DROP_OPTIONS[dropZoneResource.properties.type];
    };

    //TODO: 너무 이벤트가 많이 발생할 수 있기 때문에 throttle을 줘야할것같음
    const leaveDropZone = () => {
        if (!draggedId) return;

        const options = getDropOption();
        removeChildNode(nodeId, draggedId);
        updateNodeLayout(nodeId, {
            layoutType: options.layoutType,
            padding: options.padding,
        });
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
