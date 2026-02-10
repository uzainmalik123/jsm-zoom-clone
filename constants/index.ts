import {Home, Video, CalendarArrowDown, CalendarArrowUp, Plus, UserRoundPlus, Calendar} from "lucide-react";

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

export const homeCards = [
    {
        id: 1,
        label: 'New Meeting',
        description: 'Start an instant meeting',
        icon: Plus,
        color: 'bg-orange-1',
    },
    {
        id: 2,
        label: 'Join Meeting',
        description: 'Via invitation link',
        icon: UserRoundPlus,
        color: 'bg-blue-1',
    },
    {
        id: 3,
        label: 'Schedule Meeting',
        description: 'Plan your meeting',
        icon: Calendar,
        color: 'bg-purple-1',
    },
    {
        id: 4,
        label: 'View Recordings',
        description: 'Meeting Recordings',
        icon: Video,
        color: 'bg-yellow-1',
    }
]