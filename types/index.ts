import {ElementType, ReactNode} from "react";

export type HomeCardProps = {
    id: number,
    cardLabel: string,
    cardDescription: string,
    CardIcon: ElementType,
    cardColor: string,
    handleClick: (id: number) => void,
}

export type MeetingModalProps = {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    className?: string,
    children?: ReactNode,
    handleClick?: () => void,
    buttonText?: string,
    image?: string,
    ButtonIcon?: ElementType,
}

export type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

export type MeetingCardProps = {
    title: string;
    date: string;
    icon: string;
    isPreviousMeeting?: boolean;
    buttonIcon1?: string;
    buttonText?: string;
    handleClick: () => void;
    link: string;
}