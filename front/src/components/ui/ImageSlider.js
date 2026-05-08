import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './ImageSlider.css';

const SLIDE_INTERVAL_MS = 5000;

const ImageSlider = ({ slides, path, alt, timeWaitMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const elRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const measureWidth = useCallback(() => {
    if (elRef.current?.parentElement) {
      setParentWidth(elRef.current.parentElement.clientWidth);
    }
  }, []);

  useLayoutEffect(() => {
    measureWidth();
  }, [measureWidth]);

  useEffect(() => {
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, [measureWidth]);

  useEffect(() => {
    const initialDelay = window.setTimeout(() => {
      goToNext();
    }, timeWaitMore);

    const interval = window.setInterval(() => {
      goToNext();
    }, SLIDE_INTERVAL_MS);

    return () => {
      window.clearTimeout(initialDelay);
      window.clearInterval(interval);
    };
  }, [goToNext, timeWaitMore]);

  const slidesContainerStyle = {
    width: `${parentWidth * slides.length}px`,
    transform: `translateX(-${parentWidth * currentIndex}px)`,
  };

  const slideStyle = (index) => ({
    backgroundImage: `url(${slides[index].src})`,
    width: `${parentWidth}px`,
  });

  return (
    <div className='image_slider_container' ref={elRef} aria-hidden='true'>
      <div className='slider_arrow left_arrow' onClick={goToPrev}>
        <i className='fas fa-chevron-left'></i>
      </div>
      <div className='slider_arrow right_arrow' onClick={goToNext}>
        <i className='fas fa-chevron-right'></i>
      </div>
      <a href={path} target='_blank' rel='noreferrer' aria-label={alt}>
        <div className='slides_container' style={slidesContainerStyle}>
          {slides.map((_, slideIndex) => (
            <div key={slideIndex} className='image_slider' style={slideStyle(slideIndex)} />
          ))}
        </div>
      </a>
      <div className='slider_dots'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={slideIndex === currentIndex ? 'slider_dot active_dot' : 'slider_dot'}
            onClick={() => setCurrentIndex(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
