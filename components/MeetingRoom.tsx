'use client'

import {useState} from "react";
import {
    CallControls,
    CallingState,
    CallParticipantsList,
    CallStatsButton,
    PaginatedGridLayout,
    SpeakerLayout,
    useCallStateHooks
} from "@stream-io/video-react-sdk";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {LayoutList, User} from "lucide-react";
import {CallLayoutType} from "@/types";
import {useRouter, useSearchParams} from "next/navigation";
import EndCallButton from "@/components/EndCallButton";
import LoaderComp from "@/components/LoaderComp";

const MeetingRoom = () => {
    const [layout, setLayout] = useState<CallLayoutType>('speaker-left')
    const [showParticipants, setShowParticipants] = useState(false)
    const searchParams = useSearchParams()
    const isPersonalRoom = !!searchParams.get("personal")
    const {useCallCallingState} = useCallStateHooks()
    const callingState = useCallCallingState()
    const router = useRouter()

    if (callingState !== CallingState.JOINED) return <LoaderComp/>

    const CallLayout = () => {
        switch (layout) {
            case 'grid':
                return <PaginatedGridLayout/>
            case 'speaker-right':
                return <SpeakerLayout participantsBarPosition={'left'}/>
            case 'speaker-left':
                return <SpeakerLayout participantsBarPosition={'right'}/>
            default:
                return <SpeakerLayout participantsBarPosition={'right'}/>
        }
    }

    return (
        <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
            <div className="relative flex size-full items-center justify-center">
                <div className="flex size-full max-w-250 items-center">
                    <CallLayout/>
                </div>
                <div className={cn("h-[calc(100vh-86px)] hidden ml-2", {'show-block': showParticipants,})}>
                    <CallParticipantsList onClose={() => setShowParticipants(false)}/>
                </div>
            </div>
            <div className="fixed bottom-0 flex flex-wrap w-full items-center justify-center gap-5">
                <CallControls onLeave={() => router.push('/')}/>

                <DropdownMenu>
                    <div className="flex items-center">
                        <DropdownMenuTrigger
                            className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                            <LayoutList size={20} className="text-white"/>
                        </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
                        {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
                            <div key={index}>
                                <DropdownMenuItem className="cursor-pointer" onClick={() =>
                                    setLayout(item.toLowerCase() as CallLayoutType)
                                }>
                                    {item}
                                </DropdownMenuItem>
                            </div>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <CallStatsButton/>
                <Button onClick={() => setShowParticipants(prev => !prev)}>
                    <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                        <User size={20} className="text-white"/>
                    </div>
                </Button>

                {!isPersonalRoom && <EndCallButton/>}
            </div>
        </section>
    )
}
export default MeetingRoom
