import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Glitch.css';
import './Navbar.css';
import { DarkModeToggle } from './DarkModeToggle';
import LanguageSelector from './LanguageSelector';
import { scrollTo } from './Scroll';
import { useNavbarVisibility } from '../hooks/useNavbarVisibility';
import { useViewportBreakpoint } from '../hooks/useViewportBreakpoint';

const NAV_ITEMS = [
  { id: 'home', labelKey: 'navbar_home', mobileOnly: false },
  { id: 'projects', labelKey: 'navbar_projects', mobileOnly: false },
  { id: 'career', labelKey: 'navbar_career', mobileOnly: false },
  { id: 'skills', labelKey: 'navbar_skills', mobileOnly: false },
  { id: 'contact', labelKey: 'navbar_contact', mobileOnly: true },
];

const buildSectionLink = (sectionId, search) => `/${search}#${sectionId}`;

function NavLink({ sectionId, label, search, onNavigate, mobileOnly }) {
  return (
    <li className="nav-item">
      <Link
        to={buildSectionLink(sectionId, search)}
        className={mobileOnly ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => onNavigate(sectionId)}
      >
        {label}
      </Link>
    </li>
  );
}

function Navbar({ t }) {
  const [menuMobile, setMenuMobile] = useState(false);
  const [clickUtility, setClickUtility] = useState(false);

  const isVisible = useNavbarVisibility();
  const showContactButton = useViewportBreakpoint(960);
  const search = window.location.search;

  const handleNavigate = (sectionId) => {
    setMenuMobile(false);
    scrollTo(sectionId);
  };

  return (
    <nav className={`navbar${isVisible ? '' : ' hidden'}`} id="navbar">
      <div className="navbar-container">
        <Link
          to={buildSectionLink('home', search)}
          className="navbar-logo"
          onClick={() => handleNavigate('home')}
        >
          <div className="logo_home_img logo_englobe">
            <img src="/images/logo.png" alt="my logo" className="logo_home_img" />
          </div>
        </Link>

        <div
          className={menuMobile ? 'menu-icon open' : 'menu-icon'}
          id="nav-icon"
          onClick={() => setMenuMobile((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuMobile ? 'nav-menu active' : 'nav-menu'}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              sectionId={item.id}
              label={t(item.labelKey)}
              search={search}
              onNavigate={handleNavigate}
              mobileOnly={item.mobileOnly}
            />
          ))}
        </ul>

        {showContactButton && (
          <Link
            to={buildSectionLink('contact', search)}
            onClick={() => handleNavigate('contact')}
            className="contact-button"
          >
            {t('navbar_contact')}
            <span className="contact-animation"></span>
          </Link>
        )}
      </div>
      <div
        className={clickUtility ? 'utility_container clicked' : 'utility_container'}
        onClick={() => setClickUtility((prev) => !prev)}
        onMouseLeave={() => setClickUtility(false)}
      >
        <i className="fa-solid fa-arrow-left" />
        <LanguageSelector />
        <DarkModeToggle t={t} />
      </div>
    </nav>
  );
}

export default Navbar;
