import Image from "next/image";

export default function HeaderNav() {
    return (
        <>
            <div className="row-start-3 flex gap-[24px] items-center justify-around p-10">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    About me
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/education"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/education.svg"
                        alt="Window icon"
                        width={24}
                        height={24}
                    />
                    Education
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/experience"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Experience
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/achievements"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Achievements
                </a>
            </div>
        </>
    )
}