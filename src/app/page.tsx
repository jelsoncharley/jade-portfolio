import Intro from "./intro";

export default function Home() {
  return (<>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
      <Intro></Intro>
      <div className="text-center">
        Strategic, motivated, and reliable Master of Computing and Data Analytics student with previous experience developing web-based applications and data management systems, predominantly in the software development industry. Experienced in all stages of SDLC on both the development and testing side. A dynamic team player who collaborates with others to deliver results within tight timeframes. Dedicated to continuous learning and growth that ensures relevance and competencies in a dynamic industry.
      </div>
    </div></>
  );
}
