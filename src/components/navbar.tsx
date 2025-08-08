import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaGraduationCap, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';

interface NavLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon, onClick, isActive }) => {
    return (
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault();
                onClick();
                // Smooth scroll to section
                const element = document.getElementById(href.substring(1));
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80, // Offset for navbar height
                        behavior: 'smooth'
                    });
                }
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${isActive
                ? 'bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-400 font-medium'
                : 'hover:bg-gray-800/50 text-gray-300 hover:text-white'
                }`}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </a>
    );
};

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation links
    const navLinks = [
        { id: 'home', href: '#home', label: 'Home', icon: <FaHome /> },
        { id: 'education', href: '#education', label: 'Education', icon: <FaGraduationCap /> },
        { id: 'projects', href: '#projects', label: 'Projects', icon: <FaCode /> },
        { id: 'contact', href: '#contact', label: 'Contact', icon: <FaEnvelope /> }
    ];

    // Handle scroll event to change navbar appearance and detect active section
    useEffect(() => {
        const handleScroll = () => {
            // Change navbar style on scroll
            setIsScrolled(window.scrollY > 20);

            // Determine which section is currently in view
            const sections = navLinks.map(link => document.getElementById(link.id));

            // Find the current active section
            sections.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const isInView = rect.top <= 150 && rect.bottom >= 150;

                    if (isInView) {
                        setActiveSection(navLinks[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-dark shadow-lg shadow-black/20' : 'py-5 bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-white font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        handleLinkClick();
                    }}
                >
                    Dammyog.net
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            href={link.href}
                            label={link.label}
                            icon={link.icon}
                            onClick={() => handleLinkClick()}
                            isActive={activeSection === link.id}
                        />
                    ))}

                    {/* Resume Button */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-modern ml-2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    >
                        <FaFileAlt />
                        <span>Resume</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 glass-dark pt-20 px-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.id}
                                    href={link.href}
                                    label={link.label}
                                    icon={link.icon}
                                    onClick={() => handleLinkClick()}
                                    isActive={activeSection === link.id}
                                />
                            ))}

                            {/* Resume Button (Mobile) */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-modern flex items-center gap-2 px-4 py-3 mt-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                                onClick={handleLinkClick}
                            >
                                <FaFileAlt />
                                <span>Download Resume</span>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;