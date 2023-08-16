import React, { useRef, useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';



const ImageSider = ({ slides, path }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [parentWidth, setWidth] = useState(0);

    const timeRef = useRef(null);
    const elRef = useRef();

    const goToNext = useCallback(() => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    }, [currentIndex, slides]);

    const goToPrev = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const getSlideStylesWithBackground = (slideIndex) => ({
        backgroundImage: `url(${slides[slideIndex].src})`,
        width: `${parentWidth}px`,
    });

    const getSlidesContainerStyleWithWidth = () => ({
        width: `${(parentWidth) * slides.length}px`,
        transform: `translateX(-${(parentWidth) * currentIndex}px)`,
    });

    React.useEffect(() => {
        function handleResize() {
            setWidth(elRef.current.parentElement.clientWidth);
        }
    
        window.addEventListener('resize', handleResize)
      })

    useEffect(() => {
        if (timeRef.current) clearTimeout(timeRef.current);
        timeRef.current = setTimeout(() => {
            goToNext();
        }, 5000);

        return () => clearTimeout(timeRef.current);
    }, [goToNext]);

    useEffect(() => {
        if (!elRef.current.parentElement.clientWidth) {
            return;
        }
        setWidth(elRef.current.parentElement.clientWidth);
    }, [setWidth]);



    return (
        <div className="image__slider__container" ref={elRef}>
            <div className="slider__arrow left__arrow " onClick={() => goToPrev()}>
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider__arrow right__arrow" onClick={() => goToNext()}>
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
}

export default ImageSider;