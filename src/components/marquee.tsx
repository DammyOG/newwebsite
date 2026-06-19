import React from "react";

const items = [
    { label: "React", dot: "#ec4899" },
    { label: "Node.js", dot: "#f59e0b" },
    { label: "MongoDB", dot: "#4f46e5" },
    { label: "OpenAI API", dot: "#ec4899" },
    { label: "Kubeflow", dot: "#f59e0b" },
    { label: "Python", dot: "#4f46e5" },
    { label: "TypeScript", dot: "#ec4899" },
    { label: "Express", dot: "#f59e0b" },
];

function Row() {
    return (
        <>
            {items.map((it, i) => (
                <React.Fragment key={i}>
                    <span>{it.label}</span>
                    <span style={{ color: it.dot }}>●</span>
                </React.Fragment>
            ))}
        </>
    );
}

export default function Marquee() {
    return (
        <div className="overflow-hidden whitespace-nowrap py-4" style={{ background: "#16151a", color: "#fff" }}>
            <div
                className="font-heading inline-flex items-center gap-10 text-[18px] font-semibold tracking-wide"
                style={{ animation: "marquee 28s linear infinite" }}
            >
                <Row />
                <Row />
            </div>
        </div>
    );
}
