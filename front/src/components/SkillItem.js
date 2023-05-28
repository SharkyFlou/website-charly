import React from 'react'
import './Skills.css'

function SkillItem({src, text, level, alt}) {
  return (
    <div className='skill'>
        <div className='img__container'>
          <img src={src} alt={alt} className='skill__img'/>
        </div>
        <div className='skill_caption'>
          <h5 className='skill__text'>{text}</h5>
          <h5 className='skill__level'>{level}</h5>
        </div>
    </div>
  )
}

export default SkillItem