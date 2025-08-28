'use client'
import React from "react"

type ExperienceProps = {
    image: string,
    name: string,
    position: string,
    duration: string,
    // test: () => void
}

export const ExpCard: React.FC<ExperienceProps> = ({ image, name, position, duration/*, test*/ }) => {

    const check = (event: any) => {
        console.log(event)
    }

    return (<>
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            {/* <img className="m-1.5 h-max w-[calc(100%-12px)]" src={image} alt="image" /> */}
            <div className="h-80 content-center">
                <img className="m-1.5 h-max w-[calc(100%-12px)]" src={image} alt="image" />
            </div>
            <div className="h-max w-full rounded px-3 py-2 text-slate-600">
                <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
                    {name}
                </h6>
                <p className="my-1 font-sans text-base antialiased">
                    {position}<br></br>
                    {duration}
                </p>
            </div>
            <div className="w-full rounded px-3 pb-3 pt-1.5">
                <button onClick={(e) => { check(e) }} className="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
                    Know More
                </button>
            </div>
        </div>
        <br></br>
    </>)
}