import './Career.css';
import CareerItem from './CarreerItem';
import SlideInOnScroll from './SlideInOnScroll';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { CAREER_ENTRIES } from '../data/career';

function Career({ t }) {
  const careerRef = useRef(null);
  const [isShowMoreCareer, setIsShowMoreCareer] = useState(false);

  const setArrowLength = () => {
    if (careerRef.current) {
      const careerHeight = careerRef.current.offsetHeight;
      const arrowLength = careerHeight - 400;
      careerRef.current.style.setProperty('--len-arrow', `${arrowLength}px`);
    }
  };

  useEffect(() => {
    document.querySelectorAll('.old_career').forEach((element) => {
      element.style.display = isShowMoreCareer ? 'inherit' : 'none';
    });
  });

  useLayoutEffect(() => {
    const updateArrowLengthWithDelay = () => {
      setTimeout(() => {
        setArrowLength();
      }, 100);
    };

    updateArrowLengthWithDelay();
    window.addEventListener('resize', updateArrowLengthWithDelay);

    return () => window.removeEventListener('resize', updateArrowLengthWithDelay);
  }, []);

  function showMoreCareer() {
    setIsShowMoreCareer((prevState) => {
      const newState = !prevState;
      document.querySelectorAll('.old_career').forEach((element) => {
        element.style.display = newState ? 'inherit' : 'none';
      });
      return newState;
    });

    setTimeout(setArrowLength, 0);
  }

  const formatYear = (entry) => {
    if (entry.yearEnd === 'today') return `${entry.yearStart}-${t('career_today')}`;
    if (entry.yearEnd) return `${entry.yearStart}-${entry.yearEnd}`;
    return `${entry.yearStart}`;
  };

  const renderParts = (parts) => (
    <>
      {' '}
      {parts.map((part, index) => {
        if (part.type === 'link') {
          return (
            <Link key={index} className='link_about' to={part.href} target='_blank'>
              {t(part.key)}
            </Link>
          );
        }
        return <span key={index}>{t(part.key)}</span>;
      })}{' '}
    </>
  );

  return (
    <>
      <div className='bar_career' />

      <div className='career' ref={careerRef}>
        <div className='middle_bar_arrow' />
        <div className='middle_bar_arrow light' />

        <div className='left_side_arrow' />
        <div className='left_side_arrow light' />

        <div className='right_side_arrow' />
        <div className='right_side_arrow light' />

        <div className='start_round_arrow' />
        <div className='start_round_arrow light' />
        <div id='career' />
        <SlideInOnScroll>
          <h1>{t('career_title')}</h1>
        </SlideInOnScroll>
        <div className='career_container'>
          {CAREER_ENTRIES.map((entry) => {
            const wrapperClass = `career_wrapper wrapper_career_${entry.side}${entry.isOld ? ' old_career' : ''}`;
            const itemSideClass = `career_${entry.side}`;
            return (
              <div key={entry.id} className={wrapperClass}>
                <CareerItem
                  src={entry.src}
                  text={renderParts(entry.parts)}
                  year={formatYear(entry)}
                  alt={t(entry.altKey)}
                  className={itemSideClass}
                />
              </div>
            );
          })}
        </div>

        <div className='show_more_career'>
          <button className='show_more_career_text' onClick={showMoreCareer}>
            {isShowMoreCareer ? t('career_show_less') : t('career_show_more')}
          </button>
        </div>
      </div>
    </>
  );
}

export default Career;
