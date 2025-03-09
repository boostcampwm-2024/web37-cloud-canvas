import { ChevronRight } from 'lucide-react';

import type { ResourceCategory } from '@/entities/resource/model/constants';

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

    // const { addNode } = useCanvasStore.use.nodeActions();

    // const handleCreateResourceNode = (type: ResourceType) => {
    //     const resourceNode = createResourceNode(type as any);
    //     addNode(resourceNode);
    // };

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
                                        onClick={() => {}}
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
