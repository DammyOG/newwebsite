// ProjectsSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import Projectcomp from './projectcomp';

// Import slick-carousel styles for the slider functionality and default styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * ProjectsSlider component:
 * Implements a continuously scrolling slider with reduced gaps between projects.
 */
const ProjectsSlider: React.FC = () => {
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

    // Slider settings for continuous scroll with linear motion
    const settings = {
        dots: false,               // Hide navigation dots
        arrows: false,             // Hide navigation arrows
        infinite: true,            // Enable infinite loop scrolling
        speed: 9500,               // Total duration of the scrolling animation
        autoplay: true,            // Enable autoplay for continuous movement
        autoplaySpeed: 0,          // No pause between transitions for continuous effect
        cssEase: 'linear',         // Linear easing for a constant scrolling speed
        slidesToShow: 3,           // Number of slides visible at once
        slidesToScroll: 1,         // Scroll one slide at a time
        pauseOnHover: true,       // Continue scrolling even when hovered
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,     // Show 2 slides on screens smaller than 1024px
                    slidesToScroll: 1,
                    speed: 9500,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,     // Show 1 slide on mobile screens
                    slidesToScroll: 1,
                    speed: 9500,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,     // Same for even smaller devices
                    slidesToScroll: 1,
                    speed: 9500,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    pauseOnHover: true,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8 overflow-hidden">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
                Projects - <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 animate-pulse">Resume</a>
            </h2>

            {/* 
        Custom CSS to reduce gap between slides:
        - Adjusting the margin for each slide container.
      */}
            <style jsx global>{`
        .slick-slide > div {
          margin: 0 5px; /* Reduced horizontal margin */
        }
        .slick-list {
          margin: 0 -5px; /* Compensate for the added margin on slides */
        }
      `}</style>

            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div
                        key={`${project.title}-${index}`}
                        className="project-item flex-shrink-0"
                        style={{ width: '320px' }} // Width is fixed, margin handled via global CSS
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
    );
};

export default ProjectsSlider;
