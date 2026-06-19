"use client";
import React from "react";
import { motion } from "framer-motion";

const badge = (
    <div
        className="inline-flex items-center gap-2 rounded-full px-[14px] py-[7px] text-[13px] font-bold"
        style={{ background: "var(--chip-i)", color: "#4f46e5" }}
    >
        <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#10b981" }} />
        SWE intern · building with ML pipelines
    </div>
);

const positioning =
    "A software engineer who builds across the stack — web apps, AI tools, and the ML pipelines behind them.";

const ctas = (
    <div className="flex flex-wrap gap-[14px]">
        <a
            href="#contact"
            className="rounded-full px-7 py-[15px] text-[16px] font-bold text-white no-underline transition-transform hover:-translate-y-0.5"
            style={{ background: "#4f46e5", boxShadow: "0 10px 26px -8px rgba(79,70,229,0.6)" }}
        >
            Get in touch
        </a>
        <a
            href="#projects"
            className="rounded-full border-[1.5px] px-7 py-[15px] text-[16px] font-bold no-underline transition-transform hover:-translate-y-0.5"
            style={{ color: "var(--ink)", background: "var(--card)", borderColor: "var(--line2)" }}
        >
            View projects
        </a>
    </div>
);

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function Hero() {
    return (
        <header
            id="home"
            className="relative mx-auto grid max-w-[1240px] items-center gap-8 px-5 pb-[60px] pt-[120px] sm:px-8 md:gap-16 md:px-16 md:grid-cols-[1.1fr_0.9fr] md:pb-[110px] md:pt-[180px]"
        >
            <motion.div
                className="relative z-[2]"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="mb-[26px]">{badge}</div>
                <h1
                    className="font-heading m-0 mb-[22px] text-[46px] font-bold leading-[0.98] tracking-tight sm:text-[64px] md:text-[84px]"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    Hi, I&apos;m <span style={{ color: "#4f46e5" }}>Dami</span>.
                </h1>
                <p
                    className="m-0 mb-[34px] max-w-[32ch] text-[17px] font-medium leading-[1.6] sm:text-[20px]"
                    style={{ color: "var(--muted)" }}
                >
                    {positioning}
                </p>
                {ctas}
            </motion.div>
            <motion.div
                className="relative justify-self-center"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            >
                <span
                    className="absolute -right-[10px] -top-[28px] z-0 h-[220px] w-[220px] rounded-full opacity-30 blur-[8px]"
                    style={{ background: "#ec4899", animation: "floaty 7s ease-in-out infinite" }}
                />
                <span
                    className="absolute -bottom-[24px] -left-[28px] z-0 h-[160px] w-[160px] rounded-full opacity-30 blur-[6px]"
                    style={{ background: "#f59e0b", animation: "floaty 9s ease-in-out infinite" }}
                />
                <span
                    className="absolute -inset-[14px] z-[1] rounded-[34px] border-2 border-dashed"
                    style={{ borderColor: "var(--line2)", animation: "spinslow 40s linear infinite" }}
                />
                <div
                    className="relative z-[2] aspect-square w-[240px] overflow-hidden rounded-[28px] border-[6px] sm:w-[300px] md:w-[340px]"
                    style={{
                        background: "linear-gradient(150deg,#eef0ff,#fde7f3)",
                        boxShadow: "0 30px 60px -24px rgba(22,21,26,0.4)",
                        borderColor: "var(--card)",
                    }}
                >
                    <img
                        src="/images/dami.png"
                        alt="Dami"
                        className="block h-full w-full object-cover"
                    />
                </div>
            </motion.div>
        </header>
    );
}
