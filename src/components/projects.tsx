"use client";
import React from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tags: { label: string; color: string; bg: string }[];
    link?: string;
    image?: string;
    monogram?: { text: string; gradient: string };
}

const projects: Project[] = [
    {
        title: "AI Chatbot",
        description: "A conversational AI chatbot built with the MERN stack and the OpenAI API.",
        tags: [
            { label: "MERN", color: "#4f46e5", bg: "var(--chip-i)" },
            { label: "OpenAI", color: "#f59e0b", bg: "var(--chip-a)" },
        ],
        image: "/images/aichatbot.png",
    },
    {
        title: "GroupMail",
        description: "A Chrome extension that automatically categorizes your Gmail inbox.",
        tags: [{ label: "Chrome Extension", color: "#ec4899", bg: "var(--chip-p)" }],
        link: "https://github.com/DammyOG/GroupMail",
        image: "/images/groupmail.png",
    },
    {
        title: "Equi",
        description: "Finds the perfect midpoint spot to meet up with friends — equidistant from everyone.",
        tags: [{ label: "Web App", color: "#f59e0b", bg: "var(--chip-a)" }],
        link: "https://github.com/DammyOG/equidistance",
        image: "/images/equi.png",
    },
    {
        title: "Financly",
        description: "A mobile finance tracker with built-in receipt scanning to log spending fast.",
        tags: [{ label: "Mobile", color: "#4f46e5", bg: "var(--chip-i)" }],
        image: "/images/financetwo.png",
    },
    {
        title: "SeatChecker",
        description: "Watches UMD's course catalog and emails me the moment a seat opens in a full class.",
        tags: [
            { label: "Node.js", color: "#4f46e5", bg: "var(--chip-i)" },
            { label: "Automation", color: "#ec4899", bg: "var(--chip-p)" },
        ],
        link: "https://github.com/DammyOG/seatChecker",
        monogram: { text: "SC", gradient: "linear-gradient(135deg,#4f46e5,#7c8bff)" },
    },
    {
        title: "Reminder Bot",
        description: "A Discord bot that posts scheduled class and deadline reminders using cron jobs.",
        tags: [
            { label: "Discord Bot", color: "#ec4899", bg: "var(--chip-p)" },
            { label: "Node.js", color: "#4f46e5", bg: "var(--chip-i)" },
        ],
        link: "https://github.com/DammyOG/435_Reminders",
        monogram: { text: "RB", gradient: "linear-gradient(135deg,#ec4899,#f59e0b)" },
    },
    {
        title: "DemFits",
        description: "A team-built clothing app for browsing and putting together outfits, powered by the Unsplash API.",
        tags: [
            { label: "Web App", color: "#f59e0b", bg: "var(--chip-a)" },
            { label: "Team Project", color: "#4f46e5", bg: "var(--chip-i)" },
        ],
        link: "https://github.com/mgalamo/DemFits-CMSC335-FinalProject",
        monogram: { text: "DF", gradient: "linear-gradient(135deg,#f59e0b,#4f46e5)" },
    },
    {
        title: "CookMate AI",
        description: "An AI cooking companion that helps you figure out what to make — built as a Flutter mobile app.",
        tags: [
            { label: "Flutter", color: "#4f46e5", bg: "var(--chip-i)" },
            { label: "AI · Mobile", color: "#f59e0b", bg: "var(--chip-a)" },
        ],
        link: "https://github.com/oriamo/cookMateAiFlutter",
        monogram: { text: "CM", gradient: "linear-gradient(135deg,#10b981,#4f46e5)" },
    },
    {
        title: "HoyaHacks",
        description: "A hackathon build with a Next.js frontend and an Express + MongoDB backend with S3 file storage.",
        tags: [
            { label: "Next.js", color: "#ec4899", bg: "var(--chip-p)" },
            { label: "MongoDB · AWS", color: "#4f46e5", bg: "var(--chip-i)" },
        ],
        link: "https://github.com/DammyOG/hoyahacks",
        monogram: { text: "HH", gradient: "linear-gradient(135deg,#7c3aed,#ec4899)" },
    },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function Projects() {
    return (
        <section id="projects" className="px-5 py-[70px] sm:px-8 md:px-16 md:py-[130px]" style={{ background: "var(--soft)" }}>
            <div className="mx-auto max-w-[1200px]">
                <motion.div
                    className="mb-12 flex flex-wrap items-end justify-between gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={reveal}
                >
                    <div>
                        <span className="font-heading text-[14px] font-bold uppercase tracking-[0.12em]" style={{ color: "#4f46e5" }}>
                            Projects
                        </span>
                        <h2 className="font-heading m-0 mt-[14px] text-[32px] font-bold leading-[1.04] tracking-tight md:text-[48px]">
                            Things I&apos;ve built
                        </h2>
                    </div>
                    <a
                        href="https://github.com/DammyOG"
                        target="_blank"
                        rel="noopener"
                        className="border-b-2 pb-[2px] text-[15px] font-bold no-underline"
                        style={{ color: "var(--ink)", borderColor: "#4f46e5" }}
                    >
                        See all on GitHub →
                    </a>
                </motion.div>

                <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {projects.map((p, i) => (
                        <motion.article
                            key={p.title}
                            className="overflow-hidden rounded-[24px] border transition-transform hover:-translate-y-1"
                            style={{ background: "var(--card)", borderColor: "var(--line)", boxShadow: "0 1px 2px rgba(22,21,26,0.04)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={reveal}
                            transition={{ delay: (i % 3) * 0.06 }}
                        >
                            <div
                                className="aspect-[16/10] overflow-hidden"
                                style={
                                    p.monogram
                                        ? { background: p.monogram.gradient, position: "relative" }
                                        : { background: "linear-gradient(150deg,#eef0ff,#fde7f3)" }
                                }
                            >
                                {p.image ? (
                                    <img src={p.image} alt={p.title} className="block h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                        <span className="font-heading text-[60px] font-bold tracking-tight" style={{ color: "rgba(255,255,255,0.9)" }}>
                                            {p.monogram!.text}
                                        </span>
                                        <span
                                            className="absolute bottom-3 left-[14px] text-[11px] tracking-wide"
                                            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
                                        >
                                            add screenshot →
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-[26px]">
                                <div className="mb-3 flex items-center gap-2">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t.label}
                                            className="rounded-full px-[11px] py-[5px] text-[12px] font-bold"
                                            style={{ color: t.color, background: t.bg }}
                                        >
                                            {t.label}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-heading m-0 mb-2 text-[22px] font-bold">{p.title}</h3>
                                <p className="m-0 mb-[18px] text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                                    {p.description}
                                </p>
                                {p.link && (
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener"
                                        className="border-b-2 pb-[2px] text-[14px] font-bold no-underline"
                                        style={{ color: "var(--ink)", borderColor: p.tags[0].color }}
                                    >
                                        View on GitHub →
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
