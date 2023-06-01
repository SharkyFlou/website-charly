import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className ='footer'>
        <div className = 'footer__section'>
            <Link to="https://github.com/SharkyFlou/website-charly/blob/main/LICENSE" className='footer__link'>
                © 2023 - Charly FLU <i class="fa-solid fa-scale-balanced"></i> MIT License
            </Link>
            <Link to="https://github.com/SharkyFlou/website-charly" className='footer__link'>
                See the repository on GitHub <i class="fa-brands fa-github"></i>
            </Link>
        </div>
        <p>
            Built by Charly FLU using only React.js, HTML and CSS. 
            <br/>
            Thank you for reading to the end, I hope you enjoyed this website.
        </p>
    </div>
  )
}

export default Footer