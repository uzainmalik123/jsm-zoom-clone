import {Home, Video, CalendarArrowDown, CalendarArrowUp, Plus} from "lucide-react";

export const sidebarLinks = [
    {
        label: 'Home',
        route: '/',
        imageUrl: Home
    },
    {
        label: 'Upcoming',
        route: '/upcoming',
        imageUrl: CalendarArrowDown
    },
    {
        label: 'Previous',
        route: '/previous',
        imageUrl: CalendarArrowUp
    },
    {
        label: 'Recordings',
        route: '/recordings',
        imageUrl: Video
    },
    {
        label: 'Personal Room',
        route: '/personal-room',
        imageUrl: Plus
    },
]