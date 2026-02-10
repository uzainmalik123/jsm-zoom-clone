'use client'

import {HomeCardProps} from "@/types";

const HomeCard = ({handleClick, id, CardIcon, cardLabel, cardDescription, cardColor}: HomeCardProps) => {
    return (
        <div
            className={`${cardColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-67.5 min-h-65 rounded-lg cursor-pointer`}
            onClick={() => handleClick(id)}
        >
            <div className="flex-center glassmorphism size-12 rounded-lg">
                <CardIcon/>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{cardLabel}</h1>
                <p className="text-lg font-normal">{cardDescription}</p>
            </div>
        </div>
    )
}
export default HomeCard
