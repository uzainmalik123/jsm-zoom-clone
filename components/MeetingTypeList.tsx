'use client'

import HomeCard from "@/components/HomeCard";
import {homeCards} from "@/constants";
import {useState} from "react";
import MeetingModal from "@/components/MeetingModal";
import {useUser} from "@clerk/nextjs";
import {Call, useStreamVideoClient} from "@stream-io/video-react-sdk";
import {useRouter} from "next/navigation";
import {toast} from "sonner"

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: "",
        link: ""
    })
    const [callDetails, setCallDetails] = useState<Call>()
    const {user} = useUser()
    const client = useStreamVideoClient()
    const router = useRouter()

    const handleClick = (id: number) => {
        switch (id) {
            case 1:
                setMeetingState('isInstantMeeting');
                break
            case 2:
                setMeetingState('isJoiningMeeting');
                break
            case 3:
                setMeetingState('isInstantMeeting');
                break;
            case 4:
                setMeetingState(undefined);
                break;
            default:
                break
        }
    }

    const createMeeting = async () => {
        if (!client || !user) return;

        try {
            if (!values.dateTime) {
                toast.error('Please select a data and time');
                return
            }
            toast.error('Failed to create meeting');

            const id = crypto.randomUUID()
            const call = client.call('default', id)

            if (!call) throw new Error("Failed to create meeting");

            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
            const description = values.description || 'Instant meeting'

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description: description,
                    }
                }
            })

            setCallDetails(call)

            if (!values.description) {
                router.push(`/meeting/${call.id}`)
            }

            toast.success('Meeting successfully created!');

        } catch (error) {
            console.error(error);
            toast.error('Failed to create meeting');
        }
    }

    console.log(meetingState)

    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeCards.map(card => (
                <HomeCard
                    key={card.id}
                    id={card.id}
                    cardLabel={card.label}
                    cardDescription={card.description}
                    CardIcon={card.icon}
                    cardColor={card.color}
                    handleClick={handleClick}
                />
            ))}

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an instant meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}
export default MeetingTypeList
