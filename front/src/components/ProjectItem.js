import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function ProjectItem({ path, src, text, label, alt}) {
  return (
    <>
        <li className='projects__item'>
            <Link className='projects__item__link' to={path}>
                <figure className='projects__item__pic-wrap' data-category={label}>
                    <img src={src} alt={alt} className='projects__item__img'/>
                </figure>
                <div className='projects__item__info'>
                    <h5 className='projects__item__text'>{text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default ProjectItem