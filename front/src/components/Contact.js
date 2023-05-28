import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact (){
  return (
    <>
        <div className='bar__contact'/>
        <div  className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
                <Link className='contact__item__link' to='https://www.linkedin.com/in/charly-flu-3004b0271/'>
                    <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link className='contact__item__link' to='mailto: charly.flu.67.150@gmail.com'>
                    <i class="fa-solid fa-envelope"></i>
                </Link>
                <Link className='contact__item__link' to='https://github.com/SharkyFlou'>
                    <i class="fa-brands fa-github"></i>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Contact