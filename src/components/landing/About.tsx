
import { AsciiPortrait } from "./AsciiPotrait"
import SectionTitle from "@/components/landing/SectionTitle"
import Link from "next/link"

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Button } from "../ui/button"

const socialLinks = [
    { label: "GitHub", href: "https://github.com/the-coder-dev", Icon: FaGithub, id: 1, },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-sharma2057/", Icon: FaLinkedin, id: 2, },
    { label: "Instagram", href: "/", Icon: FaInstagram, id: 3, },
]

const About = () => {
    return (
        <section className="w-full min-h-screen p-10 ">
            <SectionTitle title="About me" />
            <div className="w-full grid grid-cols-2 justify-between mt-20">
                <div className="space-y-9">
                    <h1 className="text-3xl font-semibold">Nice to meet you, I'm <span className="font-[diphylleia]">Devraj</span></h1>
                    <p className="font-[figtree] text-muted-foreground text-lg">A Software Engineer from India. 👨🏻‍💻 I build modern, scalable digital products that turn ideas into software that is useful, intuitive, and built to last.</p>
                    <p className="font-[figtree] text-muted-foreground text-lg">My journey started with web development and WordPress, and over time I’ve grown into the broader world of software engineering — working with technologies like React, Next.js, TypeScript, Tailwind CSS, databases, authentication, and cloud platforms. I enjoy working across the stack, from crafting polished interfaces to designing the systems that power them.</p>
                    <p className="font-[figtree] text-muted-foreground text-lg">Outside of code, I’m curious about people, ideas, technology, design, and the way things work. I enjoy exploring new technologies, experimenting with projects, learning from every failure, and having conversations that go beyond just tech. I’m always trying to learn, build, and become a little better than I was yesterday. 🙌</p>

                    <div className="flex flex-col gap-4">
                        <h2>Also You can find me here: </h2>
                        <div className="flex gap-4">
                            {socialLinks.map((item) => {
                                const Icon = item.Icon;
                                return <Link href={item.href} key={item.id} className="cursor-pointer" target="_blank">
                                    <Button variant="secondary">
                                        <Icon />
                                        {item.label}
                                    </Button>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
                <div className="relative " style={{ position: "relative", width: "100%", height: "70vh" }}>
                    <AsciiPortrait />
                </div>
            </div>
        </section>
    )
}

export default About