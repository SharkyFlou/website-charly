import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import './Glitch.css'
import '../App.css'
import { Link } from 'react-router-dom';
import SlideInOnScroll from './SlideInOnScroll'
import { scrollTo } from './Scroll'

function HeroSection({ t }) {
    const forwardToScroll = (idName) => () => {
        scrollTo(idName);
    };
    const currentUrlParams = window.location.search; // Gets the query parameters, e.g., ?language=en



    return (

        <div className='hero-container'>
            {/*<video autoPlay loop muted > 
            <source src="/videos/video-1.mp4" type="video/mp4" /> 
        </video>
        */}
            <SlideInOnScroll>
                <div className='about__container'>
                    <div className='about__img__container'>
                        <div src={process.env.PUBLIC_URL + "/images/charly-flu-3.jpg"} className="me__img c-glitch me__englobe">
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        </div>
                    </div>
                    <div className='about__text'>
                        <h1>{t("home__title")}</h1>
                        <p>{t("home__intro__pt1")}</p>
                        <p className="single__line__text">{t("home__intro__pt2")} <Link className="link__about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("home__intro__pt3")}</Link> {t("home__intro__pt4")} </p>
                        <p className="single__line__text"><Link className="link__about" to="https://www.e-i.com/fr/index.html" target="_blank">{t("home__intro__pt5")} </Link> {t("home__intro__pt6")}</p>
                        <p>{t("home__intro__pt7")}</p>
                        {/*<p className="warning">{t("home__intro__pt8")}</p>*/}
 
                        <div className="hero-btns">
                            <Button className='btns' buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                link={currentUrlParams+ "#projects"}
                                onClick={forwardToScroll('projects')}
                            >
                                {t("home__projects__title")}
                            </Button>
                            <Button className='btns' buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                link={currentUrlParams+ "#skills"}
                                onClick={forwardToScroll('skills')}
                            >
                                {t("home__skills__title")}
                                {/*<i className="fa-solid fa-address-book"></i>*/}
                            </Button>

                        </div>
                    </div>
                </div>
            </SlideInOnScroll>
        </div>
    )
}

export default HeroSection