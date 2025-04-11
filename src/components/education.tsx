import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="text-white p-4 md:p-8 max-w-5xl mx-auto relative" ref={ref}>
            <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
            >
                Education
            </motion.h2>

            <motion.div
                className="relative"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Vertical line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full"></div>

                {/* University of Maryland */}
                <motion.div
                    className="flex flex-col md:flex-row items-center mb-12 md:mb-16 relative"
                    variants={itemVariants}
                >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-400 rounded-full z-10 shadow-lg shadow-green-400/40"></div>

                    {/* Date */}
                    <div className="w-full md:w-1/2 text-center md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                        <div className="inline-flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-semibold text-green-300">
                            <span>August 2024 - Current</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-8 bg-[#121a20]/40 p-4 rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                            <FaGraduationCap className="text-green-400" />
                            BS of Science, Computer Science
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-300">
                            <FaUniversity className="text-blue-400" />
                            <p>University of Maryland, College Park</p>
                        </div>
                    </div>
                </motion.div>

                {/* Prince George's Community College */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse items-center relative"
                    variants={itemVariants}
                >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-400 rounded-full z-10 shadow-lg shadow-blue-400/40"></div>

                    {/* Date */}
                    <div className="w-full md:w-1/2 text-center md:text-left pl-0 md:pl-8 mb-4 md:mb-0">
                        <div className="inline-flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-semibold text-blue-300">
                            <span>August 2022 - May 2024</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 bg-[#121a20]/40 p-4 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                            <FaGraduationCap className="text-blue-400" />
                            AS in Science, Computer Science
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-300">
                            <FaUniversity className="text-green-400" />
                            <p>Prince George's Community College</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Education;
