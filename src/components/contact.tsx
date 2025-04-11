import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: '',
    });

    const formRef = useRef(null);
    const isInView = true; // You can use your useInView hook here if desired

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Here you would typically integrate with a form submission service
        // like Formspree, EmailJS, or your own backend API

        // For demo purposes, we'll simulate a successful submission
        setFormStatus({
            submitted: true,
            success: true,
            message: 'Thanks for reaching out! I\'ll get back to you soon.'
        });

        // Reset form after successful submission
        setFormState({
            name: '',
            email: '',
            message: '',
        });

        // In a real implementation, you'd handle errors as well
    };

    return (
        <section className="text-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                    className="text-4xl lg:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-[#1a2e38] to-[#0d1c25] p-6 rounded-xl border border-gray-800 shadow-xl h-full">
                            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>

                            <div className="space-y-4 mt-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-500/20 p-2 rounded-full">
                                        <FaEnvelope className="text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href="mailto:oluwadamilolaogunbode@gmail.com" className="hover:text-blue-400 transition-colors">
                                            oluwadamilolaogunbode@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded-full">
                                        <FaUser className="text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p>Maryland, USA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-gray-300">
                                    Feel free to reach out to me for collaborations, opportunities,
                                    or just to say hello. I'm always open to discussing new projects
                                    and ideas.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-[#1a2e38] to-[#0d1c25] p-6 rounded-xl border border-gray-800 shadow-xl">
                            {formStatus.submitted && formStatus.success ? (
                                <motion.div
                                    className="text-center py-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                        <FaPaperPlane className="text-green-400 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                                    <p className="text-gray-300">{formStatus.message}</p>
                                    <button
                                        onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                                        className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2 flex items-center gap-2">
                                            <FaUser className="text-gray-400" />
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0a1217] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2 flex items-center gap-2">
                                            <FaEnvelope className="text-gray-400" />
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0a1217] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 mb-2 flex items-center gap-2">
                                            <FaComment className="text-gray-400" />
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full bg-[#0a1217] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Hello Dami, I'd like to talk about..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-md py-3 font-medium flex items-center justify-center gap-2 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaPaperPlane />
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;