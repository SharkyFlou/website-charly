import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({t}) {
    return (
        <div className='footer'>
            <div className='footer_section'>
                <Link to="https://github.com/SharkyFlou/website-charly/blob/main/LICENSE" className='footer_link' target="_blank">
                {t("footer_license_pt1")} <i className="fa-solid fa-scale-balanced"></i> {t("footer_license_pt2")}
                </Link>
                <Link to="https://github.com/SharkyFlou/website-charly" className='footer_link' target="_blank">
                {t("footer_github")} <i className="fa-brands fa-github"></i>
                </Link>
            </div>
            <p>
                {t("footer_built")}
                <br />
                {t("footer_thanks")}
            </p>
        </div>
    )
}

export default Footer