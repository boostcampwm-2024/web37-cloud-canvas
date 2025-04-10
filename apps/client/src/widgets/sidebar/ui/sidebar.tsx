import { RESOURCE_CATEGRIES } from '@/entities/resource/config/constants';

import {
    Sidebar as ShadcnSidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
} from '@/shared/shadcn/ui/sidebar';

import { ServiceMenuItem } from './service-menu-item';

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
