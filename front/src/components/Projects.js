import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    return (
        <>
            <div className='bar__projects' />
            <div className='projects' id='projects'>
                <h1>Check out my Projects!</h1>
                <div className='projects__container'>
                    <div className='projects__wrapper'>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/project/chess.jpg'
                                text='Chess'
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                            />
                            <ProjectItem
                                src='/project/chess.jpg'
                                text='Chess'
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                            />
                        </ul>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/project/chess.jpg'
                                text='Chess'
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                            />
                            <ProjectItem
                                src='/project/chess.jpg'
                                text='Chess'
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                            />
                            <ProjectItem
                                src='/project/chess.jpg'
                                text='Chess'
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects