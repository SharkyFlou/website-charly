import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Glitch.css';
import './Navbar.css';
import { DarkModeToggle } from './DarkModeToggle';
import LanguageSelector from './LanguageSelector';


function Navbar({ scrollFunc, t }) {
    const [click, setClick] = useState(false);
    const [clickUtil, setClickUtil] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const handleClickUtile = () => {
        setClickUtil(!clickUtil);
    };

    const closeMobileMenu = (name) => () => {
        setClick(false);
        scrollFunc(name);
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

    window.addEventListener('resize', showButton);

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

                    <div className={click ? 'menu-icon open' : 'menu-icon'} id="nav-icon" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#home"} className="nav-links" onClick={closeMobileMenu('home')}>
                                {t("navbar__home")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#projects"} className="nav-links" onClick={closeMobileMenu('projects')}>
                                {t("navbar__projects")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#career"} className="nav-links" onClick={closeMobileMenu('career')}>
                                {t("navbar__career")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#skills"} className="nav-links" onClick={closeMobileMenu('skills')}>
                                {t("navbar__skills")}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#contact"} className="nav-links-mobile" onClick={closeMobileMenu('contact')}>
                                {t("navbar__contact")}
                            </Link>
                        </li>
                    </ul>
                    {button && <Button onClick={closeMobileMenu('contact')} buttonStyle="btn--outline" link={process.env.PUBLIC_URL + "/#contact"} >{t("navbar__contact")}</Button>}


                </div>
                <div className={clickUtil ? "utility__container show" : "utility__container hidden"}>
                    <i class="fa-solid fa-arrow-left" onClick={handleClickUtile}/>
                    <LanguageSelector />
                    <DarkModeToggle t={t} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
