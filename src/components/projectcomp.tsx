// projectcomp.tsx
import React from 'react';

interface ProjectcompProps {
    title: string;
    description: string;
    picture: string;
    link: string;
}

const Projectcomp: React.FC<ProjectcompProps> = ({ title, description, picture, link }) => {
    return (
        <>
            {/* GitHub Link Button */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="bg-[#229545a8] text-white p-6 rounded-lg shadow-lg sm:w-72 md:w-80 lg:w-[18rem] xl:w-96 h-[19rem] mx-auto transition-transform hover:scale-105">
                    {/* Project Title */}
                    <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>

                    {/* Project Image */}
                    <img
                        src={picture}
                        alt={title}
                        className="w-full h-32 object-cover rounded-md mb-4"
                    />

                    {/* Project Description */}
                    <p className="text-lg text-gray-300 mb-4">{description}</p>




                </div>
            </a>
        </>
    );
};

export default Projectcomp;
