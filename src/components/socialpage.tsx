import React from "react";
import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa";

const SocialPage = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="h-6 w-6" />,
            url: "https://www.linkedin.com/in/dammyog/",
            color: "from-blue-400 to-blue-600",
            hoverColor: "group-hover:from-blue-500 group-hover:to-blue-700"
        },
        {
            name: "GitHub",
            icon: <FaGithub className="h-6 w-6" />,
            url: "https://github.com/DammyOG",
            color: "from-gray-600 to-gray-800",
            hoverColor: "group-hover:from-gray-700 group-hover:to-gray-900"
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="h-6 w-6" />,
            url: "https://twitter.com/Dammy0G",
            color: "from-blue-300 to-blue-500",
            hoverColor: "group-hover:from-blue-400 group-hover:to-blue-600"
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="h-6 w-6" />,
            url: "https://www.instagram.com/_dammyog",
            color: "from-pink-500 to-purple-500",
            hoverColor: "group-hover:from-pink-600 group-hover:to-purple-600"
        },
        {
            name: "Email",
            icon: <FaEnvelope className="h-6 w-6" />,
            url: "mailto:ogunbodedami1@gmail.com",
            color: "from-green-400 to-emerald-600",
            hoverColor: "group-hover:from-green-500 group-hover:to-emerald-700"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } }
    };

    return (
        <div className="text-white py-12 max-w-4xl mx-auto">
            <motion.h3
                className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Let's Connect
            </motion.h3>

            <motion.div
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className={`flex items-center gap-3 p-3 md:p-4 rounded-lg bg-gradient-to-r ${social.color} shadow-md 
                                      transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1`}>
                            <span className="text-white">{social.icon}</span>
                            <span className="text-white font-medium hidden md:inline">{social.name}</span>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 
                             rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                    Download My Resume
                </a>
            </motion.div>
        </div>
    );
};

export default SocialPage;
