import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import SlideInOnScroll from './SlideInOnScroll'

function Contact({ t }) {
    return (
        <>
            <div className='bar_contact' />
            <div className='contact' >
                <div  id='contact'/>
                <SlideInOnScroll>
                    <h1>{t("Contact")}</h1>
                </SlideInOnScroll>
                <SlideInOnScroll>
                    <div className='contact_container'>
                        <Link className='contact_item_link' to='https://www.linkedin.com/in/charlyflu' target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                            in/charlyflu/
                        </Link>
                        <Link className='contact_item_link' to='mailto:charly.flu.67.150@gmail.com' target="_blank">
                            <i className="fa-solid fa-envelope"></i>
                            charly.flu.67.150@gmail.com
                        </Link>
                        <Link className='contact_item_link' to='https://github.com/SharkyFlou' target="_blank">
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