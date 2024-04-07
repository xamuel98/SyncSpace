import { SidebarLink } from "@/types/Sidebar"

export const sidebarLinks: SidebarLink[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: "fluent:home-24",
    },
    {
        name: "Upcoming",
        path: "/dashboard/upcoming",
        icon: "fluent:device-meeting-room-24",
    },
    {
        name: "Recordings",
        path: "/dashboard/recordings",
        icon: "fluent:calendar-date-24",
    },
    {
        name: "Previous",
        path: "/dashboard/previous",
        icon: "fluent:calendar-date-24",
    },
    {
        name: "Personal Room",
        path: "/dashboard/personal-room",
        icon: "fluent:calendar-date-24",
    },
]