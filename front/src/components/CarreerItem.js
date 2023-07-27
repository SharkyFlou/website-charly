import React from 'react'
import { useState } from 'react'
import './Career.css'

function CareerItem({ src, text, year, alt }) {
  /*Allow mobile to click for putting/removing the hover effect*/
  const [click, setClick] = useState(false);

  const handleClick = () => {
      setClick(!click);
  };

  return (
    <>
      <div className={click ? "career__item clicked":"career__item"} onClick={handleClick}>
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