import React from 'react'
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
                        <div src={process.env.PUBLIC_URL + "/images/charly_22.3.jpg"} className="me_img c-glitch me_englobe">
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.3.jpg'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.3.jpg'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.3.jpg'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.3.jpg'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly_22.3.jpg'} alt='Profile of Charly FLU' className='me_img c-glitch_img' />
                        </div>
                    </div>
                    <div className='about_text'>
                        <h1>{t("home_title_pt1")}</h1>
                        <h2>{t("home_title_pt2")}</h2>
                        <p>
                            {t("home_intro_pt1")}
                            {t("home_intro_pt2")} <Link className="link_about" to="https://www.cnam-grandest.fr/formations/ing3400a/" target="_blank">{t("home_intro_pt3")}</Link> {t("home_intro_pt4")} 
                            <Link className="link_about" to="https://www.e-i.com/fr/index.html" target="_blank">{t("home_intro_pt5")} </Link> {t("home_intro_pt6")}
                            {t("home_intro_pt7")}</p>
                        {/*<p className="warning">{t("home_intro_pt8")}</p>*/}
 
                        <div className="hero-btns inv-mobile">
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#projects"} onClick={forwardToScroll('projects')} className="btn btn--large" >
                                <span>
                                    {t("home_projects_title")}
                                </span>
                                <img src={process.env.PUBLIC_URL + '/images/arrow_down.png'} alt='Flêche vers le bas' className='arrow_down' />
                            </Link>
                    
                            <Link to={process.env.PUBLIC_URL + "/"+ currentUrlParams+ "#skills"} onClick={forwardToScroll('skills')} className="btn btn--large" >
                                <span>
                                    {t("home_skills_title")}
                                </span>
                                <img src={process.env.PUBLIC_URL + '/images/arrow_down.png'} alt='Flêche vers le bas' className='arrow_down' />
                            </Link>
                        </div>
                    </div>
                </div>
            </SlideInOnScroll>
        </div>
    )
}

export default HeroSection