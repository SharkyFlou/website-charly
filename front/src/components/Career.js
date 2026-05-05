import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Career.css';
import CareerItem from './CarreerItem';
import SlideInOnScroll from './SlideInOnScroll';
import { CAREER_ENTRIES } from '../data/career';
import { useArrowLength } from '../hooks/useArrowLength';

function Career({ t }) {
  const careerRef = useRef(null);
  const [showOld, setShowOld] = useState(false);

  const updateArrowLength = useArrowLength(careerRef, [showOld]);

  useEffect(() => {
    const id = window.setTimeout(updateArrowLength, 0);
    return () => window.clearTimeout(id);
  }, [showOld, updateArrowLength]);

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

  const containerClassName = `career${showOld ? ' show_old' : ''}`;

  return (
    <>
      <div className='bar_career' />

      <div className={containerClassName} ref={careerRef}>
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
          <button className='show_more_career_text' onClick={() => setShowOld((prev) => !prev)}>
            {showOld ? t('career_show_less') : t('career_show_more')}
          </button>
        </div>
      </div>
    </>
  );
}

export default Career;
