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