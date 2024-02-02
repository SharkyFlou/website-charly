import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import SlideInOnScroll from './SlideInOnScroll'

function Contact({ t }) {
    return (
        <>
            <div className='bar__contact' />
            <div className='contact' >
                <div  id='contact__id'/>
                <SlideInOnScroll>
                    <h1>{t("Contact")}</h1>
                </SlideInOnScroll>
                <SlideInOnScroll>
                    <div className='contact__container'>
                        <Link className='contact__item__link' to='https://www.linkedin.com/in/charlyflu' target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                            in/charlyflu/
                        </Link>
                        <Link className='contact__item__link' to='mailto: charly.flu.67.150@gmail.com' target="_blank">
                            <i className="fa-solid fa-envelope"></i>
                            charly.flu.67.150@gmail.com
                        </Link>
                        <Link className='contact__item__link' to='https://github.com/SharkyFlou' target="_blank">
                            <i className="fa-brands fa-github"></i>
                            SharkyFlou
                        </Link>
                    </div>
                </SlideInOnScroll>
            </div>
        </>
    )
}

export default Contact