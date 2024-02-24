import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';

const ImageSlider = ({ slides, path, alt, widthMaxSize, timeWaitMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentWidth, setWidth] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const timeRef = useRef(null);
  const elRef = useRef();

  const goToNext = useCallback(() => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, slides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }, [currentIndex, slides]);

  const getSlideStylesWithBackground = (slideIndex) => ({
    backgroundImage: `url(${slides[slideIndex].src})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStyleWithWidth = () => ({
    width: `${parentWidth * slides.length}px`,
    transform: `translateX(-${parentWidth * currentIndex}px)`,
  });

  useLayoutEffect(() => {
    if (elRef.current && elRef.current.parentElement) {
      setWidth(elRef.current.parentElement.clientWidth);
    }
  }, [setWidth]);

  useEffect(() => {
    function handleResize() {
      if (elRef.current && elRef.current.parentElement) {
        setWidth(elRef.current.parentElement.clientWidth);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeRef.current);
    };
  }, [setWidth]);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      setTimeout(() => {
        goToNext();
      }, timeWaitMore);
    }

    if (timeRef.current) clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timeRef.current);
  }, [goToNext, firstLoad, timeWaitMore]);

  return (
    <div className="image__slider__container" ref={elRef}>
      <div className="slider__arrow left__arrow " onClick={goToPrev}>
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="slider__arrow right__arrow" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </div>
      <Link to={path} target="_blank">
        <div className="slides__container" style={getSlidesContainerStyleWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div key={slideIndex} className="image__slider" style={getSlideStylesWithBackground(slideIndex)} />
          ))}
        </div>
      </Link>
      <div className="slider__dots">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className={slideIndex === currentIndex ? "slider__dot active__dot" : "slider__dot"} onClick={() => setCurrentIndex(slideIndex)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
