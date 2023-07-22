import React from 'react'
import './Career.css'

function CareerItem({ src, text, year, alt }) {
  return (
    <>
      <div className='career__item'>
        <div className='img__container'>
          <img src={process.env.PUBLIC_URL + src} alt={alt} className='skill__img' />
        </div>
        <div className='career_caption'>
          <h5 className='career__text'>{text}</h5>
          <h5 className='career__date'>{year}</h5>
        </div>
      </div>
    </>
  )
}

export default CareerItem