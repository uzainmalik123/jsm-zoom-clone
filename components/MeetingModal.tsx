'use client'

import {MeetingModalProps} from "@/types";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const MeetingModal = ({
                          isOpen,
                          className,
                          onClose,
                          title,
                          buttonText,
                          handleClick,
                          ButtonIcon,
                          image,
                          children
                      }: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-130 flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
                <div className="flex flex-col gap-6">
                    {image && (
                        <div className="flex justify-center">
                            <Image src={image} alt={image} width={72} height={72}/>
                        </div>
                    )}
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                    {children}
                    <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                            onClick={handleClick}>
                        {ButtonIcon && (
                            <ButtonIcon/>
                        )} &nbsp;
                        {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default MeetingModal
