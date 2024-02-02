import React from 'react'
import './Career.css'
import CareerItem from './CarreerItem'
import SlideInOnScroll from './SlideInOnScroll'

function Career({ t }) {


  return (
    <>
      <div className='bar__career' />

      <div className='career'>
        <div className='middle__bar__arrow' />
        <div className='middle__bar__arrow light' />

        <div className='left__side__arrow' />
        <div className='left__side__arrow light' />

        <div className='right__side__arrow' />
        <div className='right__side__arrow light' />

        <div className='start__round__arrow' />
        <div className='start__round__arrow light' />
        <div  id='career__id'/>
        <SlideInOnScroll>
          <h1>{t("career__title")}</h1>
        </SlideInOnScroll>
        <div className='career__container'>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/lycee-jean-baptiste-schwilgue.jpg'
              text={t('career__schwilgue')}
              year='2019-2021'
              alt={t("career__schilgue__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/tabacco-field.jpg'
              text={t('career__tabacco')}
              year='2019'
              alt={t("career__tabacco__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/pizza-stella.jpg'
              text={t('career__pizza')}
              year='2020'
              alt={t("career__pizza__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/iut-robert-schuman.jpg'
              text={t('career__iut__2021')}
              year='2021-2022'
              alt={t("career__iut__2021__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/mtu-campus.jpg'
              text={t('career__mtu')}
              year='2023'
              alt={t("career__mtu__alt")}
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/hindserhof.jpg'
              text={t('career__hindserhof')}
              year='2022-2023'
              alt={t("career__hindserhof__alt")}
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
              <CareerItem src='/images/career/iut-robert-schuman-2022.jpg'
                text={t('career__iut__2023')}
                year={'2023-' + t('career__today')}
                alt={t("career__iut__2023__alt")}
                className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/abas-forterro.jpg'
              text={t('career__abas')}
              year={'2023-' + t('career__today')}
              alt={t("career__abas__2023__alt")}
              className='career__right' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Career