import { ExpCard } from "./expCard";
import * as data from "../../data/company.json"

export default function Experience() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
                Experience
            </p>
            <div className="lg:flex gap-5">
                {
                    data.company.map((company) => {
                        return <ExpCard image={company.image} name={company.name} position={company.position} duration={company.duration}></ExpCard>
                    })
                }
            </div>
        </div>
    );
}