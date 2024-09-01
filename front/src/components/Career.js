import React from 'react'
import './Career.css'
import CareerItem from './CarreerItem'
import SlideInOnScroll from './SlideInOnScroll'
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

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
    document.querySelectorAll('.old__career').forEach((element) => {
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
    console.log('showMoreCareer');
    console.log(isShowMoreCareer);
    setIsShowMoreCareer(prevState => {
      const newState = !prevState;
      document.querySelectorAll('.old__career').forEach((element) => {
        element.style.display = newState ? 'inherit' : 'none';
      });
      return newState;
    });

    // Update the size of the arrow
    setTimeout(setArrowLength, 0);
  }

  return (
    <>
      <div className='bar__career' />

      <div className='career' ref={careerRef}>
        <div className='middle__bar__arrow' />
        <div className='middle__bar__arrow light' />

        <div className='left__side__arrow' />
        <div className='left__side__arrow light' />

        <div className='right__side__arrow' />
        <div className='right__side__arrow light' />

        <div className='start__round__arrow' />
        <div className='start__round__arrow light' />
        <div id='career__id' />
        <SlideInOnScroll>
          <h1>{t("career__title")}</h1>
        </SlideInOnScroll>
        <div className='career__container'>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/eid.jpg'
              text={<> {t('career__eid__pt1')}
                <Link className="link__about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("career__eid__pt2")}</Link>
                {t('career__eid__pt3')}
                <Link className="link__about" to="https://www.e-i.com/fr/index.html" target="_blank">{t("career__eid__pt4")}</Link>
                {t('career__eid__pt5')}
              </>}
              year={'2024-' + t('career__today')}
              alt={t("career__eid__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/cnam.jpg'
              text={<> {t('career__cnam__pt1')} <Link className="link__about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("career__cnam__pt2")}</Link> {t('career__cnam__pt3')} </>}
              year={'2024-' + t('career__today')}
              alt={t("career__cnam__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/abas-forterro.jpg'
              text={<> {t('career__abas__pt1')} <Link className="link__about" to="https://abas-bs.com/fr" target="_blank">{t("career__abas__pt2")}</Link> {t('career__abas__pt3')} </>}
              year='2023-2024'
              alt={t("career__abas__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/iut-robert-schuman-2022.jpg'
              text={<> {t('career__iut__2023__pt1')} <Link className="link__about" to="https://iutrs.unistra.fr" target="_blank">{t("career__iut__2023__pt2")}</Link> {t('career__iut__2023__pt3')} </>}
              year='2023-2024'
              alt={t("career__iut__2023__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/hindserhof.jpg'
              text={<> {t('career__hindserhof__pt1')} <Link className="link__about" to="https://www.hindserhof.fr" target="_blank">{t("career__hindserhof__pt2")}</Link> {t('career__hindserhof__pt3')} </>}
              year='2022-2023'
              alt={t("career__hindserhof__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/mtu-campus.jpg'
              text={<> {t('career__mtu__pt1')} <Link className="link__about" to="https://www.mtu.ie" target="_blank">{t("career__mtu__pt2")}</Link> {t('career__mtu__pt3')} </>}
              year='2023'
              alt={t("career__mtu__alt")}
              className='career__right' />
          </div><div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/iut-robert-schuman.jpg'
              text={<> {t('career__iut__2021__pt1')} <Link className="link__about" to="https://iutrs.unistra.fr" target="_blank">{t("career__iut__2021__pt2")}</Link> {t('career__iut__2021__pt3')} </>}
              year='2021-2022'
              alt={t("career__iut__2021__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right old__career'>
            <CareerItem src='/images/career/pizza-stella.jpg'
              text={t('career__pizza')}
              year='2020'
              alt={t("career__pizza__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left old__career'>
            <CareerItem src='/images/career/tabacco-field.jpg'
              text={t('career__tabacco')}
              year='2019'
              alt={t("career__tabacco__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right old__career'>
            <CareerItem src='/images/career/lycee-jean-baptiste-schwilgue.jpg'
              text={<> {t('career__schwilgue__pt1')} <Link className="link__about" to="https://lyc-schwilgue-selestat.site.ac-strasbourg.fr" target="_blank">{t("career__schwilgue__pt2")}</Link> {t('career__schwilgue__pt3')} </>}
              year='2019-2021'
              alt={t("career__schwilgue__alt")}
              className='career__right' />
          </div>
        </div>


        <div className='show__more__career'>
          <button className='show__more__career__text' onClick={showMoreCareer}>
            {isShowMoreCareer ? t('career__show__less') : t('career__show__more')}
          </button>
        </div>
      </div>
    </>
  )
}

export default Career