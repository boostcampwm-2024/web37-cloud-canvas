import { ChevronRight } from 'lucide-react';
import { nanoid } from 'nanoid';

import { useCanvasStore } from '@/features/canvas/model/store';

import type { ResourceCategory } from '@/entities/resource/model/constants';
import { ResourceNode } from '@/entities/resource/model/service';
import type { ResourceType } from '@/entities/resource/model/types';
import { ServerSVG2D } from '@/entities/resource/ui/server/svg-2d';
import { ServerSVG3D } from '@/entities/resource/ui/server/svg-3d';

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

    const handleAddNode = (type: ResourceType) => {
        const node = ResourceNode.create(type);

        addNode(node);
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
