import { SidebarLink } from "@/types/Sidebar"

export const sidebarLinks: SidebarLink[] = [
    {
        name: "Home",
        path: "/dashboard/home",
        icon: "fluent:home-24",
    },
    {
        name: "Chats",
        path: "/dashboard/chats",
        icon: "fluent:chat-multiple-24",
    },
    {
        name: "Activity",
        path: "/dashboard/activity",
        icon: "fluent:alert-24",
    },
    {
        name: "Meetings",
        path: "/dashboard/meetings",
        icon: "fluent:video-chat-24",
    },
    {
        name: "Calls",
        path: "/dashboard/calls",
        icon: "fluent:call-24",
    },
    {
        name: "Calendar",
        path: "/dashboard/calendar",
        icon: "fluent:calendar-date-24",
    },
    {
        name: "Files",
        path: "/dashboard/files",
        icon: "fluent:document-folder-24",
    },
    {
        name: "More",
        path: "/dashboard/upcoming",
        icon: "fluent:more-horizontal-24",
    },
]

export const PasswordCheck = Object.freeze({
	MINIMUM_PASSWORD_LENGTH: 8,
	MAXIMUM_PASSWORD_LENGTH: 50,
	MATCH_UPPERCASE_LOWERCASE: `^(?=.*[a-z])(?=.*[A-Z])`,
	MATCH_SPECIAL_CHARACTER: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
	get MATCH_NUMBER() {
		return `^(?=.{${this.MINIMUM_PASSWORD_LENGTH},}$)\\D*\\d`
	},
})

export const PAGE_ROUTES = Object.freeze({
    LOGIN_ROUTE: "/login",
    REGISTER_ROUTE: "/register",
    EMAIL_VERIFICATION_ROUTE: "/email-verification",
    FORGOT_PASSWORD_ROUTE: "/forgot-password",
    FORGOT_PASSWORD_EMAIL_ROUTE: "/forgot-password-email",
    DASHBOARD_ROUTE: "/dashboard/home",
    RESET_PASSWORD_ROUTE: "/reset-password",
})