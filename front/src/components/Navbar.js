import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Glitch.css';
import './Navbar.css';
import { DarkModeToggle } from './DarkModeToggle';
import LanguageSelector from './LanguageSelector';
import { scrollTo } from './Scroll';



function Navbar({ t }) {
    const [menuMobile, setMenuMobile] = useState(false);
    const [button, setButton] = useState(true);
    /*Allow mobile to click for putting/removing the hover effect*/
    const [clickUtility, setClickUtility] = useState(false);

    const handleClickUtility = () => {
        setClickUtility(!clickUtility);
    };

    const currentUrlParams = window.location.search; // Gets the query parameters, e.g., ?language=en

    const handleClick = () => {
        setMenuMobile(!menuMobile);
    };

    const closeMobileMenu = (objectId) => () => {
        setMenuMobile(false);
        scrollTo(objectId);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="navbar-container">
                    <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#home"} className="navbar-logo" onClick={closeMobileMenu('home')}>
                        <div src={process.env.PUBLIC_URL + "/images/logo.png"} className="logo_home_img logo_englobe">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo_home_img" />
                        </div>
                    </Link>

                    <div className={menuMobile ? 'menu-icon open' : 'menu-icon'} id="nav-icon" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={menuMobile ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#home"  } className="nav-links" onClick={closeMobileMenu('home')}>
                                {t("navbar_home")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#projects" } className="nav-links" onClick={closeMobileMenu('projects')}>
                                {t("navbar_projects")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#career"} className="nav-links" onClick={closeMobileMenu('career')}>
                                {t("navbar_career")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#skills"} className="nav-links" onClick={closeMobileMenu('skills')}>
                                {t("navbar_skills")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#contact"} className="nav-links-mobile" onClick={closeMobileMenu('contact')}>
                                {t("navbar_contact")}
                            </Link>
                        </li>
                    </ul>
                    {button &&
                        <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#contact"} onClick={closeMobileMenu('contact')} className="contact-button" >
                            {t("navbar_contact")}
                            <span className="contact-animation"></span> {/* Animation element */}
                        </Link>}


                </div>
                <div className={clickUtility ? "utility_container clicked":"utility_container"} onClick={handleClickUtility} onMouseLeave={() => setClickUtility(false)}>
                    <i className="fa-solid fa-arrow-left"/>
                    <LanguageSelector />
                    <DarkModeToggle t={t} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
