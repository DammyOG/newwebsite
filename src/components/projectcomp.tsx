// projectcomp.tsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectcompProps {
    title: string;
    description: string;
    picture: string;
    link: string;
}

const Projectcomp: React.FC<ProjectcompProps> = ({ title, description, picture, link }) => {
    return (
        <div className="transition-all duration-300 hover:translate-y-[-8px] h-full">
            <div className="bg-gradient-to-br from-[#1a2e38] to-[#0d1c25] text-white p-6 rounded-xl shadow-xl 
                          h-full flex flex-col border border-gray-800 hover:border-green-500">
                {/* Project Title */}
                <h2 className="text-2xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400">
                    {title}
                </h2>

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-md mb-4 flex-shrink-0">
                    <img
                        src={picture}
                        alt={title}
                        className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                </div>

                {/* Project Description */}
                <p className="text-lg text-gray-300 mb-4 flex-grow">{description}</p>

                {/* GitHub Link Button - Only show if link exists */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 bg-[#2a3e51] hover:bg-[#35526d] 
                                 text-white py-2 px-4 rounded-md transition-all duration-300 group"
                    >
                        <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                        <span>View on GitHub</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Projectcomp;
