export interface SidebarLink {
    name: string;
    path: string;
    icon: string;
}

export interface SidebarProps {
    links: SidebarLink[];
}