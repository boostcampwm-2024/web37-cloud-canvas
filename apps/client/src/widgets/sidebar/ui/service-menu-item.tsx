import { ChevronRight } from 'lucide-react';

import { CreateResourceButton } from '@/features/create-resource/ui/create-resource-button';

import type { ResourceType } from '@/shared/types/resource';
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/shared/ui/shadcn/collapsible';
import {
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from '@/shared/ui/shadcn/sidebar';
import { ResourceCategory } from '../config/resource-categories';

interface ServeiceMenuItemProps {
    category: ResourceCategory;
}

export const ServiceMenuItem = (props: ServeiceMenuItemProps) => {
    const { category } = props;

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
                                    <CreateResourceButton
                                        key={resource.type}
                                        title={resource.title}
                                        type={resource.type as ResourceType}
                                    />
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
};
