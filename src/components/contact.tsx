"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const socials = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dammyog/",
        path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
    },
    {
        label: "GitHub",
        href: "https://github.com/DammyOG",
        path: "M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.1.82-.25.82-.56v-2.17c-3.34.71-4.04-1.59-4.04-1.59-.55-1.37-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.1-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6.01 0c2.29-1.53 3.3-1.21 3.3-1.21.65 1.66.24 2.88.12 3.18.77.83 1.23 1.88 1.23 3.17 0 4.54-2.8 5.54-5.48 5.83.43.36.81 1.09.81 2.2v3.26c0 .31.21.67.82.56A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5z",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/Dammy0G",
        path: "M23.95 4.57a10 10 0 0 1-2.83.78 4.94 4.94 0 0 0 2.17-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.49A13.97 13.97 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57c-.8-.03-1.55-.25-2.21-.61v.06a4.93 4.93 0 0 0 3.95 4.83c-.71.19-1.45.22-2.17.08a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.56 2.46-2.54z",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/_dammyog",
        path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.62c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 1.62a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68zm5.65-2.87a1.28 1.28 0 1 1 0 2.56 1.28 1.28 0 0 1 0-2.56z",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("loading");

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

            await emailjs.sendForm(serviceId, templateId, form, publicKey);

            setStatus("success");
            form.reset();
            setTimeout(() => setStatus("idle"), 4000);
        } catch (error) {
            console.error("Failed to send email:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section id="contact" className="mx-auto max-w-[1100px] px-5 py-[70px] sm:px-8 md:px-16 md:py-[130px]">
            <motion.div
                className="mb-[54px] text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
            >
                <span className="font-heading text-[14px] font-bold uppercase tracking-[0.12em]" style={{ color: "#ec4899" }}>
                    Contact
                </span>
                <h2 className="font-heading m-0 my-[14px] text-[34px] font-bold leading-[1.02] tracking-tight md:text-[60px]">
                    Let&apos;s build something.
                </h2>
                <p className="mx-auto mb-0 max-w-[46ch] text-[18px] font-medium leading-[1.6]" style={{ color: "var(--muted)" }}>
                    Always open to collaborations, opportunities, or just a friendly hello.
                </p>
            </motion.div>

            <div className="grid items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-[60px]">
                <motion.div
                    className="flex flex-col gap-[14px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                >
                    <a
                        href="mailto:oluwadamilolaogunbode@gmail.com"
                        className="flex flex-col gap-1 rounded-[18px] p-[22px] no-underline transition-colors"
                        style={{ background: "var(--soft)" }}
                    >
                        <span className="text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: "#4f46e5" }}>
                            Email
                        </span>
                        <span className="break-all text-[16px] font-semibold" style={{ color: "var(--ink)" }}>
                            oluwadamilolaogunbode@gmail.com
                        </span>
                    </a>
                    <div className="flex flex-col gap-1 rounded-[18px] p-[22px]" style={{ background: "var(--soft)" }}>
                        <span className="text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: "#ec4899" }}>
                            Location
                        </span>
                        <span className="text-[16px] font-semibold" style={{ color: "var(--ink)" }}>
                            Maryland, USA
                        </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener"
                                aria-label={s.label}
                                className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] border-[1.5px] transition-transform hover:-translate-y-0.5"
                                style={{ color: "var(--ink)", borderColor: "var(--line2)" }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="grid gap-4 rounded-[24px] border p-6 sm:p-9"
                    style={{ background: "var(--card)", borderColor: "var(--line)", boxShadow: "0 1px 2px rgba(22,21,26,0.04)" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 text-[13px] font-bold" style={{ color: "var(--body)" }}>
                            Name
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your name"
                                required
                                className="rounded-xl border-[1.5px] px-[15px] py-[13px] text-[15px] outline-none"
                                style={{ borderColor: "var(--line2)", background: "var(--input)", color: "var(--ink)" }}
                            />
                        </label>
                        <label className="flex flex-col gap-2 text-[13px] font-bold" style={{ color: "var(--body)" }}>
                            Email
                            <input
                                type="email"
                                name="from_email"
                                placeholder="you@email.com"
                                required
                                className="rounded-xl border-[1.5px] px-[15px] py-[13px] text-[15px] outline-none"
                                style={{ borderColor: "var(--line2)", background: "var(--input)", color: "var(--ink)" }}
                            />
                        </label>
                    </div>
                    <label className="flex flex-col gap-2 text-[13px] font-bold" style={{ color: "var(--body)" }}>
                        Message
                        <textarea
                            rows={5}
                            name="message"
                            placeholder="Tell me about your idea…"
                            required
                            className="resize-vertical rounded-xl border-[1.5px] px-[15px] py-[13px] text-[15px] outline-none"
                            style={{ borderColor: "var(--line2)", background: "var(--input)", color: "var(--ink)" }}
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="font-heading rounded-[14px] border-none p-4 text-[16px] font-bold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                        style={{ background: "#4f46e5", boxShadow: "0 10px 26px -8px rgba(79,70,229,0.6)" }}
                    >
                        {status === "loading"
                            ? "Sending…"
                            : status === "success"
                              ? "Thanks — I'll be in touch! ✓"
                              : status === "error"
                                ? "Something went wrong — try again"
                                : "Send message"}
                    </button>
                </motion.form>
            </div>

            <motion.div
                className="mt-10 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
            >
                <a
                    href="https://dammyog.net/resume.pdf"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-[10px] rounded-full px-[26px] py-[14px] text-[15px] font-bold no-underline"
                    style={{ color: "var(--ink)", background: "var(--soft)" }}
                >
                    ↓ Download my résumé
                </a>
            </motion.div>
        </section>
    );
}
