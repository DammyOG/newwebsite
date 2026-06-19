"use client";
import React from "react";
import { motion } from "framer-motion";

const groups = [
    {
        title: "Frontend",
        dot: "#4f46e5",
        chipBg: "var(--chip-i)",
        skills: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind"],
    },
    {
        title: "Backend",
        dot: "#ec4899",
        chipBg: "var(--chip-p)",
        skills: ["Node.js", "Express", "MongoDB", "Python", "REST APIs"],
    },
    {
        title: "ML & DevOps",
        dot: "#f59e0b",
        chipBg: "var(--chip-a)",
        skills: ["Kubeflow", "ML Pipelines", "OpenAI API", "Git & GitHub", "Docker"],
    },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function Skills() {
    return (
        <section className="px-5 py-[60px] sm:px-8 md:px-16 md:py-[110px]" style={{ background: "var(--soft)" }}>
            <div className="mx-auto max-w-[1100px]">
                <motion.div
                    className="mb-11"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                >
                    <span className="font-heading text-[14px] font-bold uppercase tracking-[0.12em]" style={{ color: "#4f46e5" }}>
                        Toolkit
                    </span>
                    <h2 className="font-heading m-0 mt-[14px] text-[32px] font-bold leading-[1.04] tracking-tight md:text-[48px]">
                        Skills &amp; tech stack
                    </h2>
                </motion.div>
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    {groups.map((g, i) => (
                        <motion.div
                            key={g.title}
                            className="rounded-[20px] border p-[26px]"
                            style={{ background: "var(--card)", borderColor: "var(--line)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={reveal}
                            transition={{ delay: i * 0.08 }}
                        >
                            <div className="font-heading mb-4 flex items-center gap-[10px] text-[18px] font-bold">
                                <span className="h-[10px] w-[10px] rounded-[3px]" style={{ background: g.dot }} />
                                {g.title}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {g.skills.map((s) => (
                                    <span
                                        key={s}
                                        className="rounded-full px-[14px] py-2 text-[14px] font-semibold"
                                        style={{ color: "var(--body)", background: g.chipBg }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
