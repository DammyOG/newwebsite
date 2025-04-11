"use client"
import Education from "@/components/education";
import Footer from "@/components/footer";
import ProjectsSlider from "@/components/projects";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
    // Ref for scroll-down button
    const scrollRef = useRef<HTMLDivElement>(null);

    // Handle scroll-down button click
    const handleScrollDown = () => {
        const educationSection = document.getElementById('education');
        if (educationSection) {
            educationSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle initial animations
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <>
            <Navbar />
            <div className="bg-[#0e0e0c] min-h-screen overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
                {/* Hero Section */}
                <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative">
                    <div className="container mx-auto px-6 py-12 md:py-20">
                        <motion.div
                            className="max-w-4xl mx-auto text-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="mb-8 inline-block p-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <img
                                    src="/images/dami.png"
                                    alt="Dami Profile"
                                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-green-500/30"
                                />
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                                variants={fadeInUp}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400">
                                    Hi, I'm Dami.
                                </span>
                            </motion.h1>

                            <motion.div
                                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
                                variants={fadeInUp}
                            >
                                <TypeAnimation
                                    sequence={[
                                        "Passionate Full Stack Developer",
                                        2000,
                                        "Computer Science Student",
                                        2000,
                                        "Problem Solver",
                                        2000,
                                        "Creative Thinker",
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                    className="min-h-[1.5em]"
                                />
                            </motion.div>

                            <motion.p
                                className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
                                variants={fadeInUp}
                            >
                                I build modern, responsive web applications with a focus on clean code,
                                intuitive user experiences, and cutting-edge technologies.
                            </motion.p>

                            <motion.div
                                className="flex flex-wrap justify-center gap-4"
                                variants={fadeInUp}
                            >
                                <a
                                    href="#contact"
                                    className="btn px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 
                                            text-white font-medium rounded-md transition-all duration-300 hover:shadow-lg"
                                >
                                    Get in Touch
                                </a>
                                <a
                                    href="#projects"
                                    className="btn px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium 
                                            rounded-md transition-all duration-300 border border-gray-700 hover:border-gray-600"
                                >
                                    View Projects
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll down indicator */}
                    <motion.div
                        ref={scrollRef}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        onClick={handleScrollDown}
                    >
                        <FaChevronDown className="text-green-400 text-3xl" />
                    </motion.div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-20 md:py-32">
                    <Education />
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 md:py-32">
                    <ProjectsSlider />
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 md:py-32 bg-[#080c10]">
                    <Contact />
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
