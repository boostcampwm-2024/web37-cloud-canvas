import { ChevronRight } from 'lucide-react';

import { useCanvasStore } from '@/features/canvas/model/store';

import { REGION_ID } from '@/entities/resource/config/constants';
import { ResourceNode } from '@/entities/resource/model/factory';
import type {
    ResourceCategory,
    ResourceType,
} from '@/entities/resource/model/types';

import { getRandomPastelColor } from '@/shared/canvas/lib/color';
import { Button } from '@/shared/shadcn/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/shared/shadcn/ui/collapsible';
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/shared/shadcn/ui/sidebar';

interface ServeiceMenuItemProps {
    category: ResourceCategory;
}

export const ServiceMenuItem = (props: ServeiceMenuItemProps) => {
    const { category } = props;

    const { addNode } = useCanvasStore.use.nodeActions();
    const { isExistGroup, addGroup, addChildNodeToGroup } =
        useCanvasStore.use.groupActions();

    const handleAddNode = (type: ResourceType) => {
        const node = ResourceNode.create(type);

        node.properties.networks.region = REGION_ID.kr;
        const nodeId = addNode(node);
        if (!isExistGroup(REGION_ID.kr)) {
            addGroup({
                id: REGION_ID.kr,
                childNodeIds: [nodeId],
                properties: {
                    title: 'Korea',
                    borderColor: getRandomPastelColor(),
                },
            });
        } else {
            addChildNodeToGroup(REGION_ID.kr, nodeId);
        }
    };

    return (
        <Collapsible
            key={category.title}
            asChild
            defaultOpen={category.title === 'Compute'}
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        {category.title}
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {category.resources.map((resource) => (
                            <SidebarMenuSubItem key={resource.title}>
                                <SidebarMenuSubButton asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                        onClick={() =>
                                            handleAddNode(resource.type)
                                        }
                                    >
                                        {resource.title}
                                    </Button>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
};
