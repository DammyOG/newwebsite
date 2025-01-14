"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import SocialPage from "./socialpage";

const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    const isFooterInView = useInView(footerRef);
    const footerControls = useAnimation();

    useEffect(() => {
        if (isFooterInView) {
            footerControls.start("visible");
        } else {
            footerControls.start("hidden");
        }
    }, [isFooterInView, footerControls]);

    return (
        <footer
            id="contact"
            className="py-8 px-4"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    ref={footerRef}
                    initial="hidden"
                    animate={footerControls}
                    variants={slideInUp}
                >
                    {/* Social Links Section */}
                    <SocialPage />

                    {/* Footer Text */}
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-400">
                            &copy; 2024 Oluwadamilola Ogunbode. All Rights Reserved.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
