
'use server'
import { ExpCard } from "./expCard";
import * as data from "../../data/company.json"

export default async function Experience() {


    const handleCheck = async (key: any) => {
        'use server'
        console.log(key)
    }

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
                Experience
            </p>
            <div className="lg:flex gap-5">
                {/* <ExpCard key={data.company[0].name} image={data.company[0].image} name={data.company[0].name} position={data.company[0].position} duration={data.company[0].duration} ></ExpCard> */}
                {
                    data.company.map((company, idx) => {
                        return <ExpCard key={company.name + idx} image={company.image} name={company.name} position={company.position} duration={company.duration}></ExpCard>
                    })
                }
            </div>
        </div >
    );
}