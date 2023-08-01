import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({t}) {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <Link to="https://github.com/SharkyFlou/website-charly/blob/main/LICENSE" className='footer__link' target="_blank">
                {t("footer__license__pt1")} <i class="fa-solid fa-scale-balanced"></i> {t("footer__license__pt2")}
                </Link>
                <Link to="https://github.com/SharkyFlou/website-charly" className='footer__link' target="_blank">
                {t("footer__github")} <i class="fa-brands fa-github"></i>
                </Link>
            </div>
            <p>
                {t("footer__built")}
                <br />
                {t("footer__thanks")}
            </p>
        </div>
    )
}

export default Footer