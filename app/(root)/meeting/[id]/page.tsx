'use client'

import {useUser} from "@clerk/nextjs";
import {StreamCall, StreamTheme} from "@stream-io/video-react-sdk";
import {useState} from "react";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import {useGetCallById} from "@/hooks/useGetCallById";
import LoaderComp from "@/components/LoaderComp";
import {useParams} from "next/navigation";

const Meeting = () => {
    const [isSetupComplete, setIsSetupComplete] = useState(false)
    const { id } = useParams<{ id: string }>();
    const { user, isLoaded } = useUser()
    const { call, isCallLoading } = useGetCallById(id)

    if(!isLoaded || isCallLoading) return <LoaderComp />

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                    ) : (
                        <MeetingRoom />
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    )
}
export default Meeting
