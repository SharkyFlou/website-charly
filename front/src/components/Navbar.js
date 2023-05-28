import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = (name) => () => {
        setClick(false);
        if (name && typeof name === 'string') {
            handleClickScroll(name);
        }
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

    const handleClickScroll = (name) => {
        const element = document.getElementById(name);
        if (element) {
            const offsetTop = element.offsetTop;
            const scrollPosition = offsetTop - 60;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/#home" className="navbar-logo" onClick={closeMobileMenu('home')}>
                        Charly
                        <i className="fa-solid fa-house"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/#home" className="nav-links" onClick={closeMobileMenu('home')}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#projects" className="nav-links" onClick={closeMobileMenu('projects')}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#career" className="nav-links" onClick={closeMobileMenu('career')}>
                                Career
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#skills" className="nav-links" onClick={closeMobileMenu('skills')}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#contact" className="nav-links-mobile" onClick={closeMobileMenu('contact')}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button onClick={closeMobileMenu('contact')} buttonStyle="btn--outline" >CONTACT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
