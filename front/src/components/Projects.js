import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import SlideInOnScroll from './SlideInOnScroll';

function Projects({ t }) {
    const [visible_projects, setVisible_projects] = React.useState("");
    const [isAllProjects, setIsAllProjects] = React.useState(false);
    const [isBestProjects, setIsBestProjects] = React.useState(false);
    const [isRecentProjects, setIsRecentProjects] = React.useState(true);

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
        { name: 'ncurses', link: 'https://invisible-island.net/ncurses/' }
    ];

    const languagesIAstucieux = [
        { name: 'Python', link: 'https://www.python.org' },
        { name: 'llama2', link: 'https://llama.meta.com' },
        { name: 'automatic-1111', link: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui' }
    ];

    const languagesPortfolio = [
        { name: 'React', link: 'https://fr.reactjs.org' },
        { name: 'JavaScript', link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
        { name: 'CSS', link: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { name: 'HTML', link: 'https://developer.mozilla.org/fr/docs/Web/HTML' }

    ];

    const slidesChess = [
        { src: '/images/projects/chess-1.jpg', alt: t("project__chess__img__alt") },
        { src: '/images/projects/chess-2.jpg', alt: t("project__chess__img__alt") },
        { src: '/images/projects/chess-3.jpg', alt: t("project__chess__img__alt") },
        { src: '/images/projects/chess-4.jpg', alt: t("project__chess__img__alt") },
        { src: '/images/projects/chess-5.jpg', alt: t("project__chess__img__alt") }
    ]

    const slidesEspagnol = [
        { src: '/images/projects/espagnol-1.jpg', alt: t("project__espagnol__img__alt") },
        { src: '/images/projects/espagnol-2.jpg', alt: t("project__espagnol__img__alt") },
        { src: '/images/projects/espagnol-3.jpg', alt: t("project__espagnol__img__alt") },
        { src: '/images/projects/espagnol-4.jpg', alt: t("project__espagnol__img__alt") }
    ]

    const slidesMars = [
        { src: '/images/projects/marsgriculteur-1.jpg', alt: t("project__mars__img__alt") },
        { src: '/images/projects/marsgriculteur-2.jpg', alt: t("project__mars__img__alt") },
        { src: '/images/projects/marsgriculteur-3.jpg', alt: t("project__mars__img__alt") },
        { src: '/images/projects/marsgriculteur-4.jpg', alt: t("project__mars__img__alt") },
        { src: '/images/projects/marsgriculteur-5.jpg', alt: t("project__mars__img__alt") }
    ];

    const slidesSpotidata = [
        { src: '/images/projects/spotidata-1.jpg', alt: t("project__spotidata__img__alt") },
        { src: '/images/projects/spotidata-2.jpg', alt: t("project__spotidata__img__alt") },
        { src: '/images/projects/spotidata-3.jpg', alt: t("project__spotidata__img__alt") },
        { src: '/images/projects/spotidata-4.jpg', alt: t("project__spotidata__img__alt") },
        { src: '/images/projects/spotidata-5.jpg', alt: t("project__spotidata__img__alt") }
    ];

    const slidesAsteroids = [
        { src: '/images/projects/rec-asteroids-1.jpg', alt: t("project__asteroids__img__alt") },
        { src: '/images/projects/rec-asteroids-2.jpg', alt: t("project__asteroids__img__alt") },
        { src: '/images/projects/rec-asteroids-3.jpg', alt: t("project__asteroids__img__alt") }
    ];

    const slidesIAstucieux = [
        { src: '/images/projects/iastucieux-1.jpg', alt: t("project__iastucieux__img__alt") },
        { src: '/images/projects/iastucieux-2.jpg', alt: t("project__iastucieux__img__alt") },
        { src: '/images/projects/iastucieux-3.jpg', alt: t("project__iastucieux__img__alt") },
        { src: '/images/projects/iastucieux-4.jpg', alt: t("project__iastucieux__img__alt") }
    ];

    const slidesPortfolio = [
        { src: '/images/projects/portfolio-1.jpg', alt: t("project__portfolio__img__alt") },
        { src: '/images/projects/portfolio-2.jpg', alt: t("project__portfolio__img__alt") },
        { src: '/images/projects/portfolio-3.jpg', alt: t("project__portfolio__img__alt") },
        { src: '/images/projects/portfolio-4.jpg', alt: t("project__portfolio__img__alt") }
    ];

    const projects = [
        {
            title: t("project__chess__title"),
            description: t("project__chess__desc"),
            alt: t("project__chess__img__alt"),
            slides: slidesChess,
            timeWaitMore: 0,
            date: 2023,
            languages: languagesChess,
            path: 'https://github.com/SharkyFlou/chess-game',
            rating: 3,
        },
        {
            title: t("project__espagnol__title"),
            description: t("project__espagnol__desc"),
            alt: t("project__espagnol__img__alt"),
            slides: slidesEspagnol,
            timeWaitMore: 200,
            date: 2022,
            languages: languagesEspagnol,
            path: 'https://github.com/SharkyFlou/Espagnol-Super-Facil',
            rating: 3,
        },
        {
            title: t("project__mars__title"),
            description: t("project__mars__desc"),
            alt: t("project__mars__img__alt"),
            slides: slidesMars,
            timeWaitMore: 400,
            date: 2022,
            languages: languagesMars,
            path: 'https://github.com/SharkyFlou/mars-griculteur',
            rating: 4,
        },
        {
            title: t("project__spotidata__title"),
            description: t("project__spotidata__desc"),
            alt: t("project__spotidata__img__alt"),
            slides: slidesSpotidata,
            timeWaitMore: 600,
            date: 2023,
            languages: languagesSpotidata,
            path: 'https://github.com/HugoLAMOUREUX/Spotidata',
            rating: 4,
        },
        {
            title: t("project__asteroids__title"),
            description: t("project__asteroids__desc"),
            alt: t("project__asteroids__img__alt"),
            slides: slidesAsteroids,
            timeWaitMore: 800,
            date: 2022,
            languages: languagesAsteroids,
            path: 'https://github.com/SharkyFlou/asteroids-algo',
            rating: 2,
        },
        {
            title: t("project__iastucieux__title"),
            description: t("project__iastucieux__desc"),
            alt: t("project__iastucieux__img__alt"),
            slides: slidesIAstucieux,
            timeWaitMore: 1000,
            date: 2024,
            languages: languagesIAstucieux,
            path: 'https://github.com/IAstucieux/IAstucieux',
            rating: 5,
        },
        {
            title: t("project__portfolio__title"),
            description: t("project__portfolio__desc"),
            alt: t("project__portfolio__img__alt"),
            slides: slidesPortfolio,
            timeWaitMore: 1200,
            date: 2024,
            languages: languagesPortfolio,
            path: 'https://github.com/SharkyFlou/website-charly',
            rating: 4,
        }
    ]

    function displayAllProject() {
        //display all the projects
        //alternatively, display two projects in a ul, with widthMaxSize={(1120 / 2) - 40 * 1}
        //then the three others in a ul, with widthMaxSize={(1120 / 3) - 40 * 2}
        //until there is no more project to display
        setVisible_projects(
            <>
                <ul className='projects__items'>
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 2) - 40 * 1} />
                    ))}
                </ul>
                <ul className='projects__items'>
                    {projects.slice(2, 5).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 3) - 40 * 2} />
                    ))}
                </ul>
                <ul className='projects__items'>
                    {projects.slice(5, 7).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 2) - 40 * 1} />
                    ))}
                </ul>
            </>
        );

        setIsBestProjects(false);
        setIsAllProjects(true);
        setIsRecentProjects(false);
    }

    //display the first 5 best rated projects
    function displayBestProject() {
        let projectsToDisplay = [...projects];
        //first sort the projects by rating
        projectsToDisplay.sort((a, b) => (a.rating > b.rating) ? -1 : 1);
        //then display the first 5
        //first two in a ul, with widthMaxSize={(1120 / 2) - 40 * 1}
        //then the three others in a ul, with widthMaxSize={(1120 / 3) - 40 * 2}
        displayProject(projectsToDisplay);

        setIsBestProjects(true);
        setIsAllProjects(false);
        setIsRecentProjects(false);
    }

    function displayMostRecentProject() {
        //copy the projects
        let projectsToDisplay = [...projects];
        //first sort the projects by date
        projectsToDisplay.sort((a, b) => (a.date > b.date) ? -1 : 1);
        //then display the first 5
        //first two in a ul, with widthMaxSize={(1120 / 2) - 40 * 1}
        //then the three others in a ul, with widthMaxSize={(1120 / 3) - 40 * 2}
        displayProject(projectsToDisplay);

        setIsBestProjects(false);
        setIsAllProjects(false);
        setIsRecentProjects(true);
    }

    function displayProject(projectsToDisplay) {
        setVisible_projects(
            <>
                <ul className='projects__items'>
                    {projectsToDisplay.slice(0, 2).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 2) - 40 * 1} />
                    ))}
                </ul>
                <ul className='projects__items'>
                    {projectsToDisplay.slice(2, 5).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 3) - 40 * 2} />
                    ))}
                </ul>
            </>
        );
    }

    React.useEffect(() => {
        displayMostRecentProject();
    }, []);



    return (
        <>
            <div className='bar__projects' />
            <div className='projects'>
                <div id='projects__id' />
                <SlideInOnScroll>
                    <h1>{t("projects__title")}</h1>
                </SlideInOnScroll>
                <div className='projects__btns'>
                    <button onClick={displayAllProject} className={isAllProjects ? "btn__prj active" :  "btn__prj"}>{t("projects__all")}</button>
                    <button onClick={displayBestProject} className={isBestProjects ? "btn__prj active" :  "btn__prj"}>{t("projects__best")}</button>
                    <button onClick={displayMostRecentProject} className={isRecentProjects ? "btn__prj active" :  "btn__prj"}>{t("projects__recent")}</button>
                </div>
                <div className='projects__container'>
                    <div className='projects__wrapper'>
                        {visible_projects}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects