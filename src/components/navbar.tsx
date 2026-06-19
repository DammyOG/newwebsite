"use client";
import React from "react";

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b backdrop-blur-md px-5 py-4 sm:px-8 md:px-16"
            style={{ background: "var(--nav)", borderColor: "var(--line)" }}
        >
            <a
                href="#home"
                className="font-heading flex items-center gap-2 text-[19px] font-bold tracking-tight no-underline"
                style={{ color: "var(--ink)" }}
            >
                <span
                    className="inline-block h-[11px] w-[11px] rounded-[3px]"
                    style={{ background: "#4f46e5", boxShadow: "6px 0 0 #ec4899, 12px 0 0 #f59e0b" }}
                />
                dammyog.net
            </a>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                {links.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        className="hidden text-[15px] font-semibold no-underline transition-colors sm:inline hover:opacity-80"
                        style={{ color: "var(--muted)" }}
                    >
                        {l.label}
                    </a>
                ))}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    className="relative h-7 w-[52px] flex-none cursor-pointer rounded-full border-[1.5px] p-0"
                    style={{ background: "var(--soft)", borderColor: "var(--line2)" }}
                >
                    <span className="absolute left-[7px] top-1/2 -translate-y-1/2 text-[11px] leading-none" style={{ color: "#f59e0b" }}>
                        ☀
                    </span>
                    <span className="absolute right-[7px] top-1/2 -translate-y-1/2 text-[11px] leading-none" style={{ color: "var(--muted)" }}>
                        ☾
                    </span>
                    <span
                        className="theme-knob absolute left-[2px] top-[2px] h-[22px] w-[22px] rounded-full"
                        style={{ background: "var(--btn-solid)", boxShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
                    />
                </button>
                <a
                    href="https://dammyog.net/resume.pdf"
                    target="_blank"
                    rel="noopener"
                    className="rounded-full px-[18px] py-[10px] text-[14px] font-bold no-underline transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--btn-solid)", color: "var(--btn-solid-text)" }}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
