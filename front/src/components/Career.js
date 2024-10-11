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
    console.log('showMoreCareer');
    console.log(isShowMoreCareer);
    setIsShowMoreCareer(prevState => {
      const newState = !prevState;
      document.querySelectorAll('.old_career').forEach((element) => {
        element.style.display = newState ? 'inherit' : 'none';
      });
      return newState;
    });

    // Update the size of the arrow
    setTimeout(setArrowLength, 0);
  }

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
          <h1>{t("career_title")}</h1>
        </SlideInOnScroll>
        <div className='career_container'>
          <div className='career_wrapper wrapper_career_left'>
            <CareerItem src='/images/career/eid.jpg'
              text={<> {t('career_eid_pt1')}
                <Link className="link_about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("career_eid_pt2")}</Link>
                {t('career_eid_pt3')}
                <Link className="link_about" to="https://www.e-i.com/fr/index.html" target="_blank">{t("career_eid_pt4")}</Link>
                {t('career_eid_pt5')}
              </>}
              year={'2024-' + t('career_today')}
              alt={t("career_eid_alt")}
              className='career_left' />
          </div>
          <div className='career_wrapper wrapper_career_right'>
            <CareerItem src='/images/career/cnam.jpg'
              text={<> {t('career_cnam_pt1')} <Link className="link_about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("career_cnam_pt2")}</Link> {t('career_cnam_pt3')} </>}
              year={'2024-' + t('career_today')}
              alt={t("career_cnam_alt")}
              className='career_right' />
          </div>
          <div className='career_wrapper wrapper_career_left'>
            <CareerItem src='/images/career/abas-forterro.jpg'
              text={<> {t('career_abas_pt1')} <Link className="link_about" to="https://abas-bs.com/fr" target="_blank">{t("career_abas_pt2")}</Link> {t('career_abas_pt3')} </>}
              year='2023-2024'
              alt={t("career_abas_alt")}
              className='career_left' />
          </div>
          <div className='career_wrapper wrapper_career_right'>
            <CareerItem src='/images/career/iut-robert-schuman-2022.jpg'
              text={<> {t('career_iut_2023_pt1')} <Link className="link_about" to="https://iutrs.unistra.fr" target="_blank">{t("career_iut_2023_pt2")}</Link> {t('career_iut_2023_pt3')} </>}
              year='2023-2024'
              alt={t("career_iut_2023_alt")}
              className='career_right' />
          </div>
          <div className='career_wrapper wrapper_career_left'>
            <CareerItem src='/images/career/hindserhof.jpg'
              text={<> {t('career_hindserhof_pt1')} <Link className="link_about" to="https://www.hindserhof.fr" target="_blank">{t("career_hindserhof_pt2")}</Link> {t('career_hindserhof_pt3')} </>}
              year='2022-2023'
              alt={t("career_hindserhof_alt")}
              className='career_left' />
          </div>
          <div className='career_wrapper wrapper_career_right'>
            <CareerItem src='/images/career/mtu-campus.jpg'
              text={<> {t('career_mtu_pt1')} <Link className="link_about" to="https://www.mtu.ie" target="_blank">{t("career_mtu_pt2")}</Link> {t('career_mtu_pt3')} </>}
              year='2023'
              alt={t("career_mtu_alt")}
              className='career_right' />
          </div><div className='career_wrapper wrapper_career_left'>
            <CareerItem src='/images/career/iut-robert-schuman.jpg'
              text={<> {t('career_iut_2021_pt1')} <Link className="link_about" to="https://iutrs.unistra.fr" target="_blank">{t("career_iut_2021_pt2")}</Link> {t('career_iut_2021_pt3')} </>}
              year='2021-2022'
              alt={t("career_iut_2021_alt")}
              className='career_left' />
          </div>
          <div className='career_wrapper wrapper_career_right old_career'>
            <CareerItem src='/images/career/pizza-stella.jpg'
              text={t('career_pizza')}
              year='2020'
              alt={t("career_pizza_alt")}
              className='career_right' />
          </div>
          <div className='career_wrapper wrapper_career_left old_career'>
            <CareerItem src='/images/career/tabacco-field.jpg'
              text={t('career_tabacco')}
              year='2019'
              alt={t("career_tabacco_alt")}
              className='career_left' />
          </div>
          <div className='career_wrapper wrapper_career_right old_career'>
            <CareerItem src='/images/career/lycee-jean-baptiste-schwilgue.jpg'
              text={<> {t('career_schwilgue_pt1')} <Link className="link_about" to="https://lyc-schwilgue-selestat.site.ac-strasbourg.fr" target="_blank">{t("career_schwilgue_pt2")}</Link> {t('career_schwilgue_pt3')} </>}
              year='2019-2021'
              alt={t("career_schwilgue_alt")}
              className='career_right' />
          </div>
        </div>


        <div className='show_more_career'>
          <button className='show_more_career_text' onClick={showMoreCareer}>
            {isShowMoreCareer ? t('career_show_less') : t('career_show_more')}
          </button>
        </div>
      </div>
    </>
  )
}

export default Career