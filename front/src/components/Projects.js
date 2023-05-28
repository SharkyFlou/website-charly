import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    return (
        <>
            <div className='bar__cards' />
            <div className='cards' id='projects'>
                <h1>Check out my Projects!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
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
                        <ul className='cards__items'>
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