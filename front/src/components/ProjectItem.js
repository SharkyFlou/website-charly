import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function ProjectItem({ path, src, text, label, alt, languages }) {
    return (
        <>
            <li className='projects__item'>
                <div className='projects__item__container'>
                    <Link to={path} target="_blank">
                        <figure className='projects__item__pic-wrap' data-category={label}>
                            <img src={process.env.PUBLIC_URL + src} alt={alt} className='projects__item__img' />
                        </figure>
                    </Link>
                    <div className='projects__item__info'>
                        <h5 className='projects__item__text'>{text}</h5>

                        {languages.map((language, index) => (
                            <Link key={index} className='language__item__link' to={language.link} target="_blank">
                                <h5 className='language__item__text'>{language.name}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </li>
        </>
    )
}

export default ProjectItem