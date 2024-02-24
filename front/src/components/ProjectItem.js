import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import ImageSlider from './ImageSlider'
import SlideInOnScroll from './SlideInOnScroll'

function ProjectItem({ project, widthMaxSize }) {


    return (
        <SlideInOnScroll>
            <li className='projects__item'>
                <div className='projects__item__container'>
                    <figure className='projects__item__pic-wrap' data-category={project.title}>
                        <ImageSlider slides={project.slides} path={project.path} alt={project.alt} widthMaxSize={widthMaxSize} timeWaitMore={project.timeWaitMore}/>
                    </figure>
                    <div className='projects__item__info'>
                        <h5 className='projects__item__text'>{project.description}</h5>

                        {project.languages.map((language, index) => (
                            <Link key={index} className='language__item__link' to={language.link} target="_blank">
                                <h5 className='language__item__text'>{language.name}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </li>
        </SlideInOnScroll>
    )
}

export default ProjectItem