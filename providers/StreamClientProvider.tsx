'use client'

import {ReactNode, useEffect, useMemo, useState} from "react";
import {
    StreamCall,
    StreamVideo, StreamVideoClient,
} from "@stream-io/video-react-sdk";
import {useUser} from "@clerk/nextjs";
import {tokenProvider} from "@/actions/stream.actions";
import LoaderComp from "@/components/LoaderComp";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({children}: { children: ReactNode }) => {
    const {user, isLoaded} = useUser()

    const videoClient = useMemo(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) throw new Error("Stream API key missing")

        return new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider
        })

    }, [user, isLoaded])

    useEffect(() => {
        return () => {
            if (videoClient) {
                videoClient.disconnectUser().catch((error) => {
                    console.error('Error disconnecting stream user: ', error)
                })
            }
        }
    }, [videoClient])

    if(!videoClient) return <LoaderComp />

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider