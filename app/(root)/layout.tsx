import {ReactNode} from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Yoom",
    description: "Video calling app",
    icons: {
        icon: '/icons/yoom-logo-cropped.svg',
    }
};

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout
