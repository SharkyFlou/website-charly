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
                <div className='about_container'>
                    <div className='about_img_container'>
                        <div src={process.env.PUBLIC_URL + "/images/charly_22.png"} className="me_img c-glitch me_englobe">
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.png'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.png'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.png'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.png'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.png'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                        </div>
                    </div>
                    <div className='about_text'>
                        <h1>{t("home_title")}</h1>
                        <p>{t("home_intro_pt1")}</p>
                        <p className="single_line_text">{t("home_intro_pt2")} <Link className="link_about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("home_intro_pt3")}</Link> {t("home_intro_pt4")} </p>
                        <p className="single_line_text"><Link className="link_about" to="https://www.e-i.com/fr/index.html" target="_blank">{t("home_intro_pt5")} </Link> {t("home_intro_pt6")}</p>
                        <p>{t("home_intro_pt7")}</p>
                        {/*<p className="warning">{t("home_intro_pt8")}</p>*/}
 
                        <div className="hero-btns inv-mobile">
                            <Button className='btns' buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                link={currentUrlParams+ "#projects"}
                                onClick={forwardToScroll('projects')}
                            >
                                {t("home_projects_title")}
                            </Button>
                            <Button className='btns' buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                link={currentUrlParams+ "#skills"}
                                onClick={forwardToScroll('skills')}
                            >
                                {t("home_skills_title")}
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