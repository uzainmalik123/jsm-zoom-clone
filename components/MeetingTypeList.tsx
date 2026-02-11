'use client'

import HomeCard from "@/components/HomeCard";
import {homeCards} from "@/constants";
import {useState} from "react";
import MeetingModal from "@/components/MeetingModal";
import {useUser} from "@clerk/nextjs";
import {Call, useStreamVideoClient} from "@stream-io/video-react-sdk";
import {useRouter} from "next/navigation";
import {toast} from "sonner"
import {Copy} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import DatePicker from "react-datepicker";
import {Input} from "@/components/ui/input";

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
                setMeetingState('isScheduleMeeting');
                break;
            case 4:
                setMeetingState(undefined);
            router.push('/recordings');
                break;
            default:
                break
        }
    }

    const createMeeting = async () => {
        if (!client || !user) return;

        try {
            if (!values.dateTime) {
                toast.error('Please select a date and time');
                return
            }

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

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

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

            {!callDetails ? (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeeting'}
                    onClose={() => setMeetingState(undefined)}
                    title="Creating Meeting"
                    handleClick={createMeeting}
                >
                    <div className="flex flex-col gap-2.5">
                        <label className="text-base text-normal leading-[22px] text-sky-2">Add a description</label>
                        <Textarea className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                            onChange={e => setValues({...values, description: e.target.value})}
                        />
                    </div>

                    <div className="flex w-full flex-col gap-2.5">
                        <label className="text-base text-normal leading-[22px] text-sky-2">Select Date and Time</label>
                        <DatePicker
                            selected={values.dateTime}
                            onChange={(date: Date | null) => {
                                if (date) setValues({...values, dateTime: date})
                            }}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                        />
                    </div>
                </MeetingModal>
            ) : (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeeting'}
                    onClose={() => setMeetingState(undefined)}
                    title="Meeting Created"
                    className="text-center"
                    handleClick={() => {
                        navigator.clipboard.writeText(meetingLink)
                        toast.success('Link copied');
                    }}
                    image="/icons/checked.svg"
                    ButtonIcon={Copy}
                    buttonText='Copy Meeting Link'
                />
            )}
            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Start an instant meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />

            <MeetingModal
                isOpen={meetingState === 'isJoiningMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Type the link here"
                className="text-center"
                buttonText="Join Meeting"
                handleClick={() => {
                    try {
                        const url = new URL(values.link, window.location.origin);
                        if (url.origin === window.location.origin) {
                            router.push(url.pathname + url.search);
                        } else {
                            toast.error('Invalid meeting link');
                        }
                    } catch {
                        // If it's not a valid URL, treat as relative path
                        if (values.link.startsWith('/')) {
                            router.push(values.link);
                        } else {
                            toast.error('Invalid meeting link');
                        }
                    }
                }}
            >
                <Input
                    placeholder="Meeting link"
                    className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                    onChange={e => setValues({...values, link: e.target.value})}
                />
            </MeetingModal>
        </section>
    )
}
export default MeetingTypeList
