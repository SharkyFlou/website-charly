import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar({scrollFunc}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
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
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="navbar-container">
                    <Link to={process.env.PUBLIC_URL + "/#home"} className="navbar-logo" onClick={closeMobileMenu('home')}>
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="my logo" className='logo__home__img'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#home"} className="nav-links" onClick={closeMobileMenu('home')}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#projects"}className="nav-links" onClick={closeMobileMenu('projects')}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#career"} className="nav-links" onClick={closeMobileMenu('career')}>
                                Career
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#skills"} className="nav-links" onClick={closeMobileMenu('skills')}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={process.env.PUBLIC_URL + "/#contact"} className="nav-links-mobile" onClick={closeMobileMenu('contact')}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button onClick={closeMobileMenu('contact')} buttonStyle="btn--outline" link={process.env.PUBLIC_URL + "/contact"} >CONTACT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
