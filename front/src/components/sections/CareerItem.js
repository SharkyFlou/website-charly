import { useState } from 'react';
import './Career.css';
import SlideInOnScroll from '../ui/SlideInOnScroll';

function CareerItem({ src, text, year, alt }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <SlideInOnScroll>
      <div
        className={isClicked ? 'career_item clicked' : 'career_item'}
        onClick={() => setIsClicked((prev) => !prev)}
        onMouseLeave={() => setIsClicked(false)}
      >
        <div className='img_container'>
          <img src={src} alt={alt} className='skill_img' />
        </div>
        <div className='career_caption'>
          <h5 className='career_text'>{text}</h5>
          <h5 className='career_date'>{year}</h5>
        </div>
      </div>
    </SlideInOnScroll>
  );
}

export default CareerItem;
