import React from 'react'
import './Career.css'
import CareerItem from './CarreerItem'

function Career() {
 

  return (
    <>
      <div className='bar__career' />

      <div className='career'>
        <div className='middle__bar__arrow' />
        <div className='left__side__arrow' />
        <div className='right__side__arrow' />
        <div className='start__round__arrow' />
        <h1 id='career'>Career</h1>
        <div className='career__container'>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/lycee-jean-baptiste-schwilgue.jpg'
              text='I obtained my baccalauréat with first class honors, specializing in computer science and mathematics, with the option of expert math and math in English.
              I obtained it at the Lycée Jean Baptiste Schwilgue in Sélestat.'
              year='2019-2021'
              alt='Jean Baptiste Schwilgue Selestat'
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/tabacco-field.jpg'
              text='I was a tobacco picker for a whole month as part of a summer job. 
                I discovered the hardness of working in the field and the importance of teamwork.'
              year='2019'
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/pizza-stella.jpg'
              text='I worked as a pizza maker for 1 month at Pizza Stella in Krafft as a summer job. 
              I learned how to work as part of a team, how not to get in the way of my colleagues and how to behave with customers.'
              year='2020'
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/iut-robert-schuman.jpg'
              text='A year and a half of my BUT in computer science was spent at the IUT Robert Schuman in Illkirch-Graffenstaden.
                There I learned advanced programming basics and advanced mathematics.'
              year='2021-2022'
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/mtu-campus.jpg'
              text='I spent half a year on Erasmus at MTU in Cork, Ireland,
                where I improved my English, and continued my BUT in computer science.'
              year='2023'
              className='career__left' />
          </div>
          <div className='career__wrapper wrapper__career__right'>
            <CareerItem src='/images/career/hindserhof.jpg'
              text='I worked as a cook for over two months at the Hindserhof restaurant in Hindisheim as part of a summer job.
                I learned how to manage a team, work under pressure and improvise with the means at hand.'
              year='2023-now'
              className='career__right' />
          </div>
          <div className='career__wrapper wrapper__career__left'>
            <CareerItem src='/images/career/iut-robert-schuman-2022.jpg'
              text='I will finish my BUT in computer science at the IUT Robert Schuman in Illkirch-Graffenstaden.
              The last year is a work-study program, and Im doing it at the company ABAS near Strasbourg'
              year='2023-now'
              className='career__left' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Career