import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import SlideInOnScroll from '../ui/SlideInOnScroll';
import ProjectsFilterBar from './ProjectsFilterBar';
import ProjectsList from './ProjectsList';
import { PROJECT_FILTERS, useFilteredProjects } from '../../hooks/useFilteredProjects';

function Projects() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState(PROJECT_FILTERS.RECENT);
    const visibleProjects = useFilteredProjects(activeFilter, t);

    return (
        <>
            <div className='bar_projects' />
            <div className='projects'>
                <div id='projects' />
                <SlideInOnScroll>
                    <h1>{t('projects_title')}</h1>
                </SlideInOnScroll>
                <ProjectsFilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
                <div className='projects_container'>
                    <div className='projects_wrapper'>
                        <ProjectsList projects={visibleProjects} activeFilter={activeFilter} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
