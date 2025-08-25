export const FlipCard: React.FC<any> = ({ image, name, description }) => {
    return (<>
        {/* <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            <div className="card__content transition-transform duration-1000">
                <div className="h-80 content-center card__front">
                    <img className="m-1.5 h-max w-[calc(100%-12px)]" src="/images/loyolaloogo.png" alt="image" />
                </div>
                <div className="h-max w-full rounded px-3 py-2 text-slate-600 card__back">
                    <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
                        Loyola
                    </h6>
                    <p className="my-1 font-sans text-base antialiased">
                        Description<br></br>
                        Duration
                    </p>

                    <span className='bg-emerald-50 text-emerald-600 text-xs font-medium mr-2 px-1.5 py-1 rounded-full'>Pass Class</span>
                </div>
                <div className="w-full rounded px-3 pb-3 pt-1.5">
                    <button className="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
                        Know More
                    </button>
                </div>
            </div>
        </div>
        <br></br> */}
        <div className="perspective-800 w-40">
            <div className="hover:rotate-y-180 text-center bg-pink-600 relative p-20 transition-transform duration-1000 text-white font-bold">
                <div className="backface-hidden absolute top-0 bottom-0 right-0 left-0 p-8 bg-pink-600 flex items-center justify-center">
                    <h2>Front</h2>
                </div>
                <div className="hover:rotate-y-180 backface-hidden absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
                    <h2>Back</h2>
                </div>

            </div>
        </div>
    </>)
}