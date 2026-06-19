"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "9+", label: "Projects shipped", color: "#4f46e5" },
    { value: "2026", label: "Expected grad", color: "#ec4899" },
    { value: "∞", label: "Ideas in the queue", color: "#f59e0b" },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-[1100px] px-5 py-[70px] sm:px-8 md:px-16 md:py-[130px]">
            <motion.div
                className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
            >
                <div>
                    <span
                        className="font-heading text-[14px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: "#ec4899" }}
                    >
                        About
                    </span>
                    <h2 className="font-heading m-0 mt-[14px] text-[32px] font-bold leading-[1.04] tracking-tight md:text-[48px]">
                        A bit about me
                    </h2>
                </div>
                <div>
                    <p className="m-0 mb-[22px] text-[18px] font-medium leading-[1.7] md:text-[21px]" style={{ color: "var(--body)" }}>
                        I&apos;m a software engineer and Computer Science student at the University of Maryland, College Park. I
                        like working across the whole stack — turning ideas into things people can actually use, whether
                        that&apos;s a web app, an AI tool, or the infrastructure underneath.
                    </p>
                    <p className="m-0 mb-9 text-[16px] leading-[1.7] md:text-[18px]" style={{ color: "var(--muted)" }}>
                        Right now I&apos;m doing a software engineering internship where I&apos;m building and experimenting with
                        ML pipelines on Kubeflow. I care about the details: fast systems, thoughtful interactions, and code
                        that&apos;s clean enough to come back to.
                    </p>
                    <div className="grid grid-cols-3 gap-[18px]">
                        {stats.map((s) => (
                            <div key={s.label} className="rounded-[18px] p-[22px]" style={{ background: "var(--soft)" }}>
                                <div className="font-heading text-[36px] font-bold leading-none" style={{ color: s.color }}>
                                    {s.value}
                                </div>
                                <div className="mt-2 text-[14px] font-semibold" style={{ color: "var(--muted)" }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
