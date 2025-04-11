// ProjectsSlider.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import Projectcomp from './projectcomp';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import slick-carousel styles for the slider functionality and default styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for better design
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a2e38]/80 hover:bg-[#35526d] text-white p-3 rounded-full -ml-4 hidden md:block"
            aria-label="Previous"
        >
            <FaChevronLeft />
        </button>
    );
};

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a2e38]/80 hover:bg-[#35526d] text-white p-3 rounded-full -mr-4 hidden md:block"
            aria-label="Next"
        >
            <FaChevronRight />
        </button>
    );
};

/**
 * ProjectsSlider component:
 * Implements a continuously scrolling slider with reduced gaps between projects.
 */
const ProjectsSlider: React.FC = () => {
    // State to track if auto-scrolling is active
    const [isAutoplay, setIsAutoplay] = useState(true);

    // Updated projects data with GitHub links
    const projects = [
        {
            title: 'Financly',
            description: 'A mobile finance tracker application that supports receipt scanning.',
            picture: 'images/financetwo.png',
            // link: 'https://github.com/DammyOG/financly'
            link: ''
        },
        {
            title: 'AI chatbot',
            description: 'An AI chatbot built using the MERN Stack and Open AI API.',
            picture: 'images/aichatbot.png',
            // link: 'https://github.com/DammyOG/ai-chatbot'
            link: ''
        },
        {
            title: 'Groupmail',
            description: 'Chrome Web Extension built for categorizing gmails.',
            picture: 'images/groupmail.png',
            link: 'https://github.com/DammyOG/GroupMail'
        },
        {
            title: 'Equi',
            description: 'Want to find a place close to you and your friends to hang out? Equi is the app for you!',
            picture: 'images/equi.png',
            link: 'https://github.com/DammyOG/equidistance'
        }
    ];

    // Slider settings with improved control options
    const settings = {
        dots: true,             // Show navigation dots for mobile users
        dotsClass: "slick-dots custom-dots", // Custom class for styling dots
        arrows: true,           // Show navigation arrows
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        infinite: true,         // Enable infinite loop scrolling
        speed: 800,             // Animation speed for manual navigation
        autoplay: isAutoplay,   // Enable/disable autoplay based on state
        autoplaySpeed: 5000,    // 5 seconds per slide for a nicer pace
        cssEase: 'ease-out',    // Smoother easing
        slidesToShow: 3,        // Number of slides visible at once
        slidesToScroll: 1,      // Scroll one slide at a time
        pauseOnHover: true,     // Pause on hover
        swipeToSlide: true,     // Enable swiping on mobile
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };

    // Toggle autoplay function
    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
                    Projects
                </h2>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button
                        onClick={toggleAutoplay}
                        className={`px-4 py-2 rounded-md transition-all duration-300 text-sm ${isAutoplay
                                ? 'bg-green-700 text-white'
                                : 'bg-gray-700 text-gray-300'
                            }`}
                    >
                        {isAutoplay ? 'Auto-Scrolling: On' : 'Auto-Scrolling: Off'}
                    </button>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#2a3e51] hover:bg-[#35526d] text-white px-4 py-2 rounded-md transition-all duration-300"
                    >
                        <span>View Resume</span>
                    </a>
                </div>
            </div>

            {/* Custom styling for slider */}
            <style jsx global>{`
                .slick-slide > div {
                    margin: 0 10px;
                    height: 100%;
                }
                .slick-list {
                    margin: 0 -10px;
                    padding: 20px 0;
                }
                .custom-dots {
                    bottom: -40px;
                }
                .custom-dots li button:before {
                    font-size: 12px;
                    color: #aaa;
                }
                .custom-dots li.slick-active button:before {
                    color: #4ade80;
                }
            `}</style>

            <div className="relative">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="h-full"
                        >
                            <Projectcomp
                                title={project.title}
                                description={project.description}
                                picture={project.picture}
                                link={project.link}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectsSlider;
