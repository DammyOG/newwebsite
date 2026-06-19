"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EduItem {
    period: string;
    status: "In progress" | "Completed";
    dot: string;
    degree: string;
    school: string;
    blurb: string;
    chipBg: string;
    coursework: string[];
}

const items: EduItem[] = [
    {
        period: "Aug 2024 — Present",
        status: "In progress",
        dot: "#4f46e5",
        degree: "B.S. in Computer Science",
        school: "University of Maryland, College Park",
        blurb:
            "Focusing on systems, machine-learning infrastructure, and full-stack development while building real projects on the side.",
        chipBg: "var(--chip-i)",
        coursework: ["Data Structures", "Algorithms", "Computer Systems", "Object-Oriented Programming", "Discrete Structures"],
    },
    {
        period: "Aug 2022 — May 2024",
        status: "Completed",
        dot: "#ec4899",
        degree: "A.S. in Computer Science",
        school: "Prince George's Community College",
        blurb: "Built my computer-science foundations and earned an associate degree before transferring to UMD.",
        chipBg: "var(--chip-p)",
        coursework: ["Intro to Computer Science", "Data Structures", "Calculus I & II", "Computer Architecture"],
    },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function Education() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="education" className="mx-auto max-w-[980px] px-5 py-[70px] sm:px-8 md:px-16 md:py-[130px]">
            <motion.div
                className="mb-11"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
            >
                <span className="font-heading text-[14px] font-bold uppercase tracking-[0.12em]" style={{ color: "#ec4899" }}>
                    Education
                </span>
                <h2 className="font-heading m-0 mt-[14px] mb-[6px] text-[32px] font-bold leading-[1.04] tracking-tight md:text-[48px]">
                    Where I&apos;ve studied
                </h2>
                <p className="m-0 text-[15px] font-medium" style={{ color: "var(--muted)" }}>
                    Tap a card to see coursework and focus.
                </p>
            </motion.div>

            <div className="relative grid gap-[18px] pl-5 sm:pl-8 md:pl-[38px]">
                <span
                    className="absolute bottom-[14px] left-[6px] top-[14px] w-[2px] rounded-full"
                    style={{ background: "linear-gradient(#4f46e5,#ec4899)" }}
                />
                {items.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <motion.div
                            key={item.degree}
                            className="relative overflow-hidden rounded-[22px] border"
                            style={{ background: "var(--card)", borderColor: "var(--line)", boxShadow: "0 1px 2px rgba(22,21,26,0.04)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={reveal}
                        >
                            <span
                                className="absolute top-[34px] z-[2] h-3 w-3 rounded-full border-[3px]"
                                style={{ left: "calc(-1 * clamp(20px, 4vw, 38px) + 1px)", background: item.dot, borderColor: "var(--bg)" }}
                            />
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-[18px] border-none bg-transparent px-6 py-8 text-left sm:px-9"
                            >
                                <div>
                                    <div
                                        className="font-heading mb-2 flex items-center gap-[10px] text-[14px] font-semibold tracking-wide"
                                        style={{ color: item.dot }}
                                    >
                                        {item.period}
                                        <span
                                            className="rounded-full px-[9px] py-[3px] text-[11px] font-bold tracking-wide"
                                            style={
                                                item.status === "In progress"
                                                    ? { color: "#10b981", background: "rgba(16,185,129,0.12)" }
                                                    : { color: "var(--muted)", background: "var(--soft)" }
                                            }
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                    <h3
                                        className="font-heading m-0 mb-[5px] text-[20px] font-bold tracking-tight md:text-[26px]"
                                        style={{ color: "var(--ink)" }}
                                    >
                                        {item.degree}
                                    </h3>
                                    <div className="text-[16px] font-semibold" style={{ color: "var(--muted)" }}>
                                        {item.school}
                                    </div>
                                </div>
                                <motion.span
                                    className="text-[20px] leading-none"
                                    style={{ color: "var(--muted)" }}
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                                >
                                    ⌄
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <div className="px-6 pb-8 sm:px-9">
                                            <div className="border-t pt-5" style={{ borderColor: "var(--line)" }}>
                                                <p className="m-0 mb-4 text-[15px] font-medium leading-[1.65]" style={{ color: "var(--body)" }}>
                                                    {item.blurb}
                                                </p>
                                                <div
                                                    className="mb-[10px] text-[12px] font-bold uppercase tracking-[0.08em]"
                                                    style={{ color: "var(--muted)" }}
                                                >
                                                    Relevant coursework
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.coursework.map((c) => (
                                                        <span
                                                            key={c}
                                                            className="rounded-full px-[13px] py-[7px] text-[13px] font-semibold"
                                                            style={{ color: "var(--body)", background: item.chipBg }}
                                                        >
                                                            {c}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
