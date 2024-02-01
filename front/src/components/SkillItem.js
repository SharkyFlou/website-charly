import React from 'react'
import './Skills.css'
import SlideInOnScroll from './SlideInOnScroll'

function SkillItem({ src, text, level, alt }) {
    return (
        <SlideInOnScroll>
            <div className='skill'>
                <div className='img__container'>
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
                    <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
                </div>
                <div className='skill_caption'>
                    <h5 className='skill__text'>{text}</h5>
                    <h5 className='skill__level'>{level}</h5>
                </div>
            </div>
        </SlideInOnScroll>
    )
}

export default SkillItem