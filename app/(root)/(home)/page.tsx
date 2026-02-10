import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
    const now = new Date();

    const timeString = Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const formattedTime = timeString.format(now);

    const dateFormatter = Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    const formattedDate = dateFormatter.format(now);

    return (
        <section className="flex size-full flex-col gap-8 text-white">
            <div className="h-75 w-full rounded-lg bg-[url('/images/hero-background.png')] bg-cover">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-8">
                    <h2 className="glassmorphism max-w-267.5 rounded py-2 text-center text-base font-normal px-2">Upcoming Meeting at: 12:30 PM</h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-extrabold lg:text-7xl">{formattedTime}</h1>
                        <p className="text-lg font-medium text-sky-1 lg:text-2xl">{formattedDate}</p>
                    </div>
                </div>
            </div>

            <MeetingTypeList />
        </section>
    )
}
export default Home
