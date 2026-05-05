import React, { useMemo, useState } from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';
import SlideInOnScroll from './SlideInOnScroll';
import { PROJECTS } from '../data/projects';

const FILTERS = {
  ALL: 'all',
  BEST: 'best',
  RECENT: 'recent',
};

function Projects({ t }) {
    const [activeFilter, setActiveFilter] = useState(FILTERS.RECENT);

    const translatedProjects = useMemo(
        () =>
            PROJECTS.map((project) => ({
                ...project,
                title: t(project.titleKey),
                description: t(project.descriptionKey),
                alt: t(project.altKey),
                slides: project.slides.map((s) => ({ src: s.src, alt: t(s.altKey) })),
            })),
        [t]
    );

    const visibleProjects = useMemo(() => {
        if (activeFilter === FILTERS.ALL) {
            return translatedProjects;
        }
        const sorted = [...translatedProjects];
        if (activeFilter === FILTERS.BEST) {
            sorted.sort((a, b) => b.rating - a.rating);
        } else {
            sorted.sort((a, b) => b.date - a.date);
        }
        return sorted.slice(0, 5);
    }, [translatedProjects, activeFilter]);

    const renderProjects = () => {
        if (activeFilter === FILTERS.ALL) {
            return (
                <>
                    <ul className='projects_items'>
                        {visibleProjects.slice(0, 2).map((project) => (
                            <ProjectItem key={project.id} project={project} widthMaxSize={(1120 / 2) - 40} />
                        ))}
                    </ul>
                    <ul className='projects_items'>
                        {visibleProjects.slice(2, 5).map((project) => (
                            <ProjectItem key={project.id} project={project} widthMaxSize={(1120 / 3) - 80} />
                        ))}
                    </ul>
                    <ul className='projects_items'>
                        {visibleProjects.slice(5, 7).map((project) => (
                            <ProjectItem key={project.id} project={project} widthMaxSize={(1120 / 2) - 40} />
                        ))}
                    </ul>
                </>
            );
        }
        return (
            <>
                <ul className='projects_items'>
                    {visibleProjects.slice(0, 2).map((project) => (
                        <ProjectItem key={project.id} project={project} widthMaxSize={(1120 / 2) - 40} />
                    ))}
                </ul>
                <ul className='projects_items'>
                    {visibleProjects.slice(2, 5).map((project) => (
                        <ProjectItem key={project.id} project={project} widthMaxSize={(1120 / 3) - 80} />
                    ))}
                </ul>
            </>
        );
    };

    const buttonClass = (filter) => (activeFilter === filter ? 'btn_prj active' : 'btn_prj');

    return (
        <>
            <div className='bar_projects' />
            <div className='projects'>
                <div id='projects' />
                <SlideInOnScroll>
                    <h1>{t('projects_title')}</h1>
                </SlideInOnScroll>
                <div className='projects_btns'>
                    <button onClick={() => setActiveFilter(FILTERS.ALL)} className={buttonClass(FILTERS.ALL)}>{t('projects_all')}</button>
                    <button onClick={() => setActiveFilter(FILTERS.BEST)} className={buttonClass(FILTERS.BEST)}>{t('projects_best')}</button>
                    <button onClick={() => setActiveFilter(FILTERS.RECENT)} className={buttonClass(FILTERS.RECENT)}>{t('projects_recent')}</button>
                </div>
                <div className='projects_container'>
                    <div className='projects_wrapper'>
                        {renderProjects()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
