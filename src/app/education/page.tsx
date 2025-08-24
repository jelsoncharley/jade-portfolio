import { Card } from "./card";

export default function Experience() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <p>
                Education

            </p>
            <div className="row-start flex gap-10">

                <Card image="/images/loyolaloogo.png" name="Loyola" description="Primary and Secondary"></Card>
                <Card image="/images/uop_logo.jpg" name="University of Pune" description="College"></Card>
                <Card image="/images/Saint-Mary-University-2991839189.jpg" name="Saint Mary's University" description="Masters"></Card>
            </div>
        </div>
    );
}