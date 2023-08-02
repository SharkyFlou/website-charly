import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact ({t}){
  return (
    <>
        <div className='bar__contact'/>
        <div  className='contact' >
            <h1 id='contact__title'>{t("Contact")}</h1>
            <div className='contact__container'>
                <Link className='contact__item__link' to='https://www.linkedin.com/in/charly-flu-3004b0271/' target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    in/charly-flu-3004b0271/
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
        </div>
    </>
  )
}

export default Contact