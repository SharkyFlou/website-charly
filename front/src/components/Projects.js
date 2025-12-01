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

    const languagesSlidingbg = [
        { name: 'Unity', link: 'https://unity.com' },
        { name: 'C#', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' }
    ];

    const slidesChess = [
        { src: '/images/projects/chess-1.jpg', alt: t("project_chess_img_alt") },
        { src: '/images/projects/chess-2.jpg', alt: t("project_chess_img_alt") },
        { src: '/images/projects/chess-3.jpg', alt: t("project_chess_img_alt") },
        { src: '/images/projects/chess-4.jpg', alt: t("project_chess_img_alt") },
        { src: '/images/projects/chess-5.jpg', alt: t("project_chess_img_alt") }
    ]

    const slidesEspagnol = [
        { src: '/images/projects/espagnol-1.jpg', alt: t("project_espagnol_img_alt") },
        { src: '/images/projects/espagnol-2.jpg', alt: t("project_espagnol_img_alt") },
        { src: '/images/projects/espagnol-3.jpg', alt: t("project_espagnol_img_alt") },
        { src: '/images/projects/espagnol-4.jpg', alt: t("project_espagnol_img_alt") }
    ]

    const slidesMars = [
        { src: '/images/projects/marsgriculteur-1.jpg', alt: t("project_mars_img_alt") },
        { src: '/images/projects/marsgriculteur-2.jpg', alt: t("project_mars_img_alt") },
        { src: '/images/projects/marsgriculteur-3.jpg', alt: t("project_mars_img_alt") },
        { src: '/images/projects/marsgriculteur-4.jpg', alt: t("project_mars_img_alt") },
        { src: '/images/projects/marsgriculteur-5.jpg', alt: t("project_mars_img_alt") }
    ];

    const slidesSpotidata = [
        { src: '/images/projects/spotidata-1.jpg', alt: t("project_spotidata_img_alt") },
        { src: '/images/projects/spotidata-2.jpg', alt: t("project_spotidata_img_alt") },
        { src: '/images/projects/spotidata-3.jpg', alt: t("project_spotidata_img_alt") },
        { src: '/images/projects/spotidata-4.jpg', alt: t("project_spotidata_img_alt") },
        { src: '/images/projects/spotidata-5.jpg', alt: t("project_spotidata_img_alt") }
    ];

    const slidesAsteroids = [
        { src: '/images/projects/rec-asteroids-1.jpg', alt: t("project_asteroids_img_alt") },
        { src: '/images/projects/rec-asteroids-2.jpg', alt: t("project_asteroids_img_alt") },
        { src: '/images/projects/rec-asteroids-3.jpg', alt: t("project_asteroids_img_alt") }
    ];

    const slidesIAstucieux = [
        { src: '/images/projects/iastucieux-1.jpg', alt: t("project_iastucieux_img_alt") },
        { src: '/images/projects/iastucieux-2.jpg', alt: t("project_iastucieux_img_alt") },
        { src: '/images/projects/iastucieux-3.jpg', alt: t("project_iastucieux_img_alt") },
        { src: '/images/projects/iastucieux-4.jpg', alt: t("project_iastucieux_img_alt") }
    ];

    const slidesPortfolio = [
        { src: '/images/projects/portfolio-1.jpg', alt: t("project_portfolio_img_alt") },
        { src: '/images/projects/portfolio-2.jpg', alt: t("project_portfolio_img_alt") },
        { src: '/images/projects/portfolio-3.jpg', alt: t("project_portfolio_img_alt") },
        { src: '/images/projects/portfolio-4.jpg', alt: t("project_portfolio_img_alt") }
    ];

    const slidesSlidingbg = [
        { src: '/images/projects/slidingbg-1.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-2.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-3.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-4.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-5.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-6.jpg', alt: t("project_slidingbg_img_alt") },
        { src: '/images/projects/slidingbg-7.jpg', alt: t("project_slidingbg_img_alt") }
    ]

    const projects = [
        {
            title: t("project_chess_title"),
            description: t("project_chess_desc"),
            alt: t("project_chess_img_alt"),
            slides: slidesChess,
            timeWaitMore: 0,
            date: 2023,
            languages: languagesChess,
            path: 'https://github.com/SharkyFlou/chess-game',
            rating: 2,
        },
        {
            title: t("project_espagnol_title"),
            description: t("project_espagnol_desc"),
            alt: t("project_espagnol_img_alt"),
            slides: slidesEspagnol,
            timeWaitMore: 200,
            date: 2022,
            languages: languagesEspagnol,
            path: 'https://github.com/SharkyFlou/Espagnol-Super-Facil',
            rating: 3,
        },
        {
            title: t("project_mars_title"),
            description: t("project_mars_desc"),
            alt: t("project_mars_img_alt"),
            slides: slidesMars,
            timeWaitMore: 400,
            date: 2022,
            languages: languagesMars,
            path: 'https://github.com/SharkyFlou/mars-griculteur',
            rating: 4,
        },
        {
            title: t("project_spotidata_title"),
            description: t("project_spotidata_desc"),
            alt: t("project_spotidata_img_alt"),
            slides: slidesSpotidata,
            timeWaitMore: 600,
            date: 2023,
            languages: languagesSpotidata,
            path: 'https://github.com/HugoLAMOUREUX/Spotidata',
            rating: 4,
        },
        {
            title: t("project_asteroids_title"),
            description: t("project_asteroids_desc"),
            alt: t("project_asteroids_img_alt"),
            slides: slidesAsteroids,
            timeWaitMore: 800,
            date: 2022,
            languages: languagesAsteroids,
            path: 'https://github.com/SharkyFlou/asteroids-algo',
            rating: 2,
        },
        {
            title: t("project_iastucieux_title"),
            description: t("project_iastucieux_desc"),
            alt: t("project_iastucieux_img_alt"),
            slides: slidesIAstucieux,
            timeWaitMore: 1000,
            date: 2024,
            languages: languagesIAstucieux,
            path: 'https://github.com/IAstucieux/IAstucieux',
            rating: 5,
        },
        {
            title: t("project_portfolio_title"),
            description: t("project_portfolio_desc"),
            alt: t("project_portfolio_img_alt"),
            slides: slidesPortfolio,
            timeWaitMore: 1200,
            date: 2024,
            languages: languagesPortfolio,
            path: 'https://github.com/SharkyFlou/website-charly',
            rating: 4,
        },
        {
            title: t("project_slidingbg_title"),
            description: t("project_slidingbg_desc"),
            alt: t("project_slidingbg_img_alt"),
            slides: slidesSlidingbg,
            timeWaitMore: 1400,
            date: 2025,
            languages: languagesSlidingbg,
            path: 'https://github.com/SharkyFlou/slidingBurger',
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
                <ul className='projects_items'>
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 2) - 40 * 1} />
                    ))}
                </ul>
                <ul className='projects_items'>
                    {projects.slice(2, 5).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 3) - 40 * 2} />
                    ))}
                </ul>
                <ul className='projects_items'>
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
                <ul className='projects_items'>
                    {projectsToDisplay.slice(0, 2).map((project, index) => (
                        <ProjectItem key={index} project={project} widthMaxSize={(1120 / 2) - 40 * 1} />
                    ))}
                </ul>
                <ul className='projects_items'>
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
            <div className='bar_projects' />
            <div className='projects'>
                <div id='projects' />
                <SlideInOnScroll>
                    <h1>{t("projects_title")}</h1>
                </SlideInOnScroll>
                <div className='projects_btns'>
                    <button onClick={displayAllProject} className={isAllProjects ? "btn_prj active" :  "btn_prj"}>{t("projects_all")}</button>
                    <button onClick={displayBestProject} className={isBestProjects ? "btn_prj active" :  "btn_prj"}>{t("projects_best")}</button>
                    <button onClick={displayMostRecentProject} className={isRecentProjects ? "btn_prj active" :  "btn_prj"}>{t("projects_recent")}</button>
                </div>
                <div className='projects_container'>
                    <div className='projects_wrapper'>
                        {visible_projects}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects