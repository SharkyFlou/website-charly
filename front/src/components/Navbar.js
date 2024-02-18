import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Glitch.css';
import './Navbar.css';
import { DarkModeToggle } from './DarkModeToggle';
import LanguageSelector from './LanguageSelector';
import { scrollTo } from './Scroll';



function Navbar({ t }) {
    const [menuMobile, setMenuMobile] = useState(false);
    const [clickUtil, setClickUtil] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setMenuMobile(!menuMobile);
    };

    const handleClickUtils = () => {
        setClickUtil(!clickUtil);
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
                    <Link to={process.env.PUBLIC_URL + "/#home"} className="navbar-logo" onClick={closeMobileMenu('home')}>
                        <div src={process.env.PUBLIC_URL + "/images/logo.png"} className="logo__home__img c-glitch logo__englobe">
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo__home__img c-glitch__img" />
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo__home__img c-glitch__img" />
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo__home__img c-glitch__img" />
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo__home__img c-glitch__img" />
                            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className="logo__home__img c-glitch__img" />
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
                            <Link to={process.env.PUBLIC_URL + "/#home"} className="nav-links" onClick={closeMobileMenu('home')}>
                                {t("navbar__home")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#projects"} className="nav-links" onClick={closeMobileMenu('projects__id')}>
                                {t("navbar__projects")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#career"} className="nav-links" onClick={closeMobileMenu('career__id')}>
                                {t("navbar__career")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#skills"} className="nav-links" onClick={closeMobileMenu('skills__id')}>
                                {t("navbar__skills")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#contact"} className="nav-links-mobile" onClick={closeMobileMenu('contact__id')}>
                                {t("navbar__contact")}
                            </Link>
                        </li>
                    </ul>
                    {button &&
                        <Link to={process.env.PUBLIC_URL + "/#contact"} onClick={closeMobileMenu('contact__id')} className="contact-button" >
                            {t("navbar__contact")}
                            <span className="contact-animation"></span> {/* Animation element */}
                        </Link>}


                </div>
                <div className={clickUtil ? "utility__container show" : "utility__container hidden"}>
                    <i className="fa-solid fa-arrow-left" onClick={handleClickUtils} />
                    <LanguageSelector />
                    <DarkModeToggle t={t} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
