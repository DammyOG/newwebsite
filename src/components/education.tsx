import React from 'react';

const Education = () => {
    return (
        <div className=" text-white p-8  relative">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Education</h2>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-500"></div>

                {/* First row */}
                <div className="flex items-center mb-8">
                    <p className="w-1/2 text-right pr-6 text-lg lg:text-2xl font-semibold">2024 - Current</p>
                    <div className="w-1/2 pl-6 text-sm md:text-md lg:text-xl">
                        <p>BS of science, Computer Science</p>
                        <p> University of Maryland, College Park</p>
                    </div>
                </div>

                {/* Second row */}
                <div className="flex items-center">
                    <div className="w-1/2 text-right pr-6 text-sm  md:text-md lg:text-xl">
                        <p>AS in Science, Computer Science</p>
                        <p>Prince George's Community College</p>
                    </div>
                    <p className="w-1/2 pl-6 text-lg lg:text-2xl font-semibold">August 2022 - May 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
