import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ImageSlider from './ImageSlider'
import SlideInOnScroll from './SlideInOnScroll'

function ProjectItem({ project, widthMaxSize }) {


    return (
        <SlideInOnScroll>
            <li className='projects_item'>
                <div className='projects_item_container'>
                    <figure className='projects_item_pic-wrap' data-category={project.title}>
                        <ImageSlider slides={project.slides} path={project.path} alt={project.alt} widthMaxSize={widthMaxSize} timeWaitMore={project.timeWaitMore}/>
                    </figure>
                    <div className='projects_item_info'>
                        <h5 className='projects_item_text'>{project.description}</h5>

                        {project.languages.map((language, index) => (
                            <Link key={index} className='language_item_link' to={language.link} target="_blank">
                                <h5 className='language_item_text'>{language.name}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </li>
        </SlideInOnScroll>
    )
}

export default ProjectItem