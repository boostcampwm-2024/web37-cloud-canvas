import { ChevronRight } from 'lucide-react';

import { Button } from '@/shared/ui/shadcn/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/shared/ui/shadcn/collapsible';
import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/shared/ui/shadcn/sidebar';
import { ResourceCategory } from '../../config/sidebar';
import { useCanvasStore } from '../../model/canvas.store';
import { createResourceNode } from '../../model/node.model';
import { ResourceType } from '../../model/resource.types';

interface ServeiceMenuItemProps {
    category: ResourceCategory;
}

export const ServiceMenuItem = (props: ServeiceMenuItemProps) => {
    const { category } = props;

    const { addNode } = useCanvasStore.use.nodeActions();

    const handleCreateResourceNode = (type: ResourceType) => {
        const resourceNode = createResourceNode(type as any);
        addNode(resourceNode);
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
                                            handleCreateResourceNode(
                                                resource.type,
                                            )
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
