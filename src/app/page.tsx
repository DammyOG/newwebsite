"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) document.documentElement.setAttribute("data-theme", "dark");
        else document.documentElement.removeAttribute("data-theme");
        try {
            localStorage.setItem("dami-theme", next ? "dark" : "light");
        } catch {
            // localStorage unavailable
        }
    };

    return (
        <div id="site" style={{ background: "var(--bg)", color: "var(--ink)", minHeight: "100vh" }}>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
