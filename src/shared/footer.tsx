import Image from "next/image";

export default function Footer() {
    return (<><div className="flex gap-[24px] justify-self-center fixed bottom-10">

        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/jelsoncharley/"
            target="_blank"
        >
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
            />
            Linkedin
        </a>
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto://jelsoncharley@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
            />
            Email
        </a>
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/A00446838"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Github
        </a>
    </div></>)
}