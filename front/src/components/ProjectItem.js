import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function ProjectItem({ path, src, text, label, alt, language}) {
  return (
    <>
        <li className='projects__item'>
            <Link className='projects__item__link' to={path}>
                <figure className='projects__item__pic-wrap' data-category={label}>
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='projects__item__img'/>
                </figure>
                <div className='projects__item__info'>
                    <h5 className='projects__item__text'>{text}</h5>
                    <Link className='language__item__link' to={path}>
                        <h5 className='language__item__text'>{language}</h5>
                    </Link>
                </div>
            </Link>
        </li>
    </>
  )
}

export default ProjectItem