import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    return (
        <>
            <div className='bar__projects' />
            <div className='projects'>
                <h1 id='projects'>Projects</h1>
                <div className='projects__container'>
                    <div className='projects__wrapper'>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/images/projects/chess.jpg'
                                text="A completly working chess game made in Java Swing. Detects check, checkmate, stalemate, and castling. Also detects if a move is illegal and don't allow it."
                                label='Chess'
                                alt='A chess board'
                                path='/projects'
                                language='Javaswing'
                            />
                            <ProjectItem
                                src='/images/projects/espagnol-super-facil.jpg'
                                text="Espagnol Super Facil is an desktop application to learn Spanish made using WinForm.
                                 It's a group project I made for my studies.
                                 I was in charge of the structure of the application and the connection between the database and the application."
                                label='Espagnol Super Facil'
                                alt='Application to learn Spanish'
                                path='/projects'
                                language='C#'
                            />
                        </ul>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/images/projects/marsgriculteur-2.jpg'
                                text='MarsGriculteur is a game made in Unity. 
                                It is a group project I made for my studies.
                                I was in charge the market system and events, I also designed the map and the items .'
                                label='MarsGriculteur'
                                alt='A 2d game made in Unity'
                                path='/projects'
                                language='Unity'
                            />
                            <ProjectItem
                                src='/images/projects/spotidata-2.jpg'
                                text='Spotidata is a web application made with the framework Express, using in React for the front end, and Node.js for the back-end.
                                It allows you to get lots of statistics about your Spotify.
                                This was made for school in a group of 3 people.'
                                
                                label='Spotidata'
                                alt='Spotidata web application'
                                path='/projects'
                                language='Node.js'
                            />
                            <ProjectItem
                                src='/images/projects/rec-asteroids-2.jpg'
                                text='Recursive asteroids is an aglorithm that control an spaceships to avoid asteriods.
                                It calculates recusrvilvely each possible path, or stop when it find a path that avoid all the asteroids.'
                                label='Recursive '
                                alt='A chess board'
                                path='/projects'
                                language='C'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects