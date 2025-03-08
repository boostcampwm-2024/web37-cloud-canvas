import {
    Sidebar as ShadcnSidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
} from '@/shared/ui/shadcn/sidebar';

import { RESOURCE_CATEGRIES } from '../../config/sidebar';

import { ServiceMenuItem } from './ServiceMenuItem';

export const Sidebar = () => {
    return (
        <ShadcnSidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {RESOURCE_CATEGRIES.map((category) => (
                            <ServiceMenuItem
                                key={category.title}
                                category={category}
                            />
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </ShadcnSidebar>
    );
};
