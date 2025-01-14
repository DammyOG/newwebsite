import React from 'react'
import Projectcomp from './projectcomp'

const Projects = () => {
    return (
        <>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">Projects - <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className='text-blue-500 animate-pulse'>Resume</a></h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                <Projectcomp title='Financly' description='A mobile finance tracker application that supports receipt scanning.' picture='images/financetwo.png' link='/' />
                <Projectcomp title='AI chatbot' description='An AI chatbot built using the MERN Stack and Open AI API.' picture='images/aichatbot.png' link='/' />
                <Projectcomp title='Groupmail' description='Chrome Web Extension built for categorizing gmails.' picture='images/groupmail.png' link='/' />
            </div>
        </>
    )
}

export default Projects