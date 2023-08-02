import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects({t}) {
    const languagesChess = [
        { name: 'Java', link: 'https://www.java.com/fr/' },
        { name: 'JavaSwing', link: 'https://docs.oracle.com/javase/6/docs/technotes/guides/swing/' },
        { name: 'SQLite', link: 'https://www.sqlite.org/index.html' }
      ];

    const languagesEspagnol = [
        { name: 'C#', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { name: 'WinForm', link: 'https://learn.microsoft.com/en-us/dotnet/desktop/winforms/?view=netframeworkdesktop-4.8' }
      ];

    const languagesMars = [
        { name: 'Unity', link: 'https://unity.com' },
        { name: 'C#', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { name: 'MySQL', link: 'https://www.mysql.com' }
        ];

    const languagesSpotidata = [
        { name: 'Node.js', link: 'https://nodejs.org' },
        { name: 'React', link: 'https://fr.reactjs.org' },
        { name: 'Express', link: 'https://expressjs.com' },
        { name: 'JavaScript', link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' }
    ];

    const languagesAsteroids = [
        { name: 'C', link: 'https://www.open-std.org/jtc1/sc22/wg14/' },
        { name: 'ncurses', link: 'https://invisible-island.net/ncurses/' },
    ];
    return (
        <>
            <div className='bar__projects' />
            <div className='projects'>
                <h1 id='projects'>{t("projects__title")}</h1>
                <div className='projects__container'>
                    <div className='projects__wrapper'>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/images/projects/chess.jpg'
                                text={t("project__chess__desc")}
                                label={t("project__chess__title")}
                                alt={t("project__chess__img__alt")}
                                path='https://github.com/SharkyFlou/chess-game'
                                languages={languagesChess}
                            />
                            <ProjectItem
                                src='/images/projects/espagnol-super-facil.jpg'
                                text={t("project__espagnol__desc")}
                                label={t("project__espagnol__title")}
                                alt={t("project__espagnol__img__alt")}
                                path='https://github.com/SharkyFlou/Espagnol-Super-Facil'
                                languages={languagesEspagnol}
                            />
                        </ul>
                        <ul className='projects__items'>
                            <ProjectItem
                                src='/images/projects/marsgriculteur-2.jpg'
                                text={t("project__mars__desc")}
                                label={t("project__mars__title")}
                                alt={t("project__mars__img__alt")}
                                path='https://github.com/SharkyFlou/mars-griculteur'
                                languages={languagesMars}
                            />
                            <ProjectItem
                                src='/images/projects/spotidata-2.jpg'
                                text={t("project__spotidata__desc")}
                                label={t("project__spotidata__title")}
                                alt={t("project__spotidata__img__alt")}
                                path='https://github.com/HugoLAMOUREUX/Spotidata'
                                languages={languagesSpotidata}
                            />
                            <ProjectItem
                                src='/images/projects/rec-asteroids-2.jpg'
                                text={t("project__asteroids__desc")}
                                label={t("project__asteroids__title")}
                                alt={t("project__asteroids__img__alt")}
                                path='https://github.com/SharkyFlou/asteroids-algo'
                                languages={languagesAsteroids}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects