import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

import type { ResourceType } from '@/shared/types/resource';
import { Button } from '@/shared/ui/shadcn/button';

import {
    createNodeFactory,
    createResourceFactory,
} from '../model/create-resource.model';

interface CreateResourceButtonProps {
    type: ResourceType;
    title: string;
}

export const CreateResourceButton = (props: CreateResourceButtonProps) => {
    const { type, title } = props;
    const addNode = useNodeStore.use.addNode();
    const addResource = useResourceStore.use.addResource();

    const handleCreateResource = () => {
        const node = createNodeFactory(type);
        const resource = createResourceFactory(type, node.id);

        addNode(node);
        addResource(resource);
    };

    return (
        <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleCreateResource}
        >
            {title}
        </Button>
    );
};
