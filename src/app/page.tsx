"use client"
import Education from "@/components/education";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation"

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default function Home() {
    return (
        <div className="bg-[#0e0e0c] grid grid-rows-[1fr_auto] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 md:gap-14 row-start-1 items-center">
                <section className="flex flex-col gap-4 pt-20 items-center sm:items-start min-h-[40vh] lg:min-h-[40vh]">
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Dami.",
                            1000,
                            "Passionate Full Stack Developer",
                            1000,
                            "Nice to meet you",
                            1000,
                        ]}
                        speed={50}
                        style={{ whiteSpace: "pre" }} // Ensures text stays on a single line
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                        repeat={Infinity}
                    />

                </section>
                <section className="min-h-[40vh] lg:min-h-[40vh]">
                    <Education />
                </section>
                <section className="min-h-[40vh] lg:min-h-[40vh]">
                    <Projects />
                </section>
            </main>
            <Footer />
        </div>
    );
}
