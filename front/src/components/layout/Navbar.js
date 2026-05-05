import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../ui/Glitch.css';
import './Navbar.css';
import { DarkModeToggle } from '../ui/DarkModeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { useNavbarVisibility } from '../../hooks/useNavbarVisibility';
import { useViewportBreakpoint } from '../../hooks/useViewportBreakpoint';
import { useScrollLink } from '../../hooks/useScrollLink';

const NAV_ITEMS = [
  { id: 'home', labelKey: 'navbar_home', mobileOnly: false },
  { id: 'projects', labelKey: 'navbar_projects', mobileOnly: false },
  { id: 'career', labelKey: 'navbar_career', mobileOnly: false },
  { id: 'skills', labelKey: 'navbar_skills', mobileOnly: false },
  { id: 'contact', labelKey: 'navbar_contact', mobileOnly: true },
];

function NavLink({ sectionId, label, mobileOnly, onNavigate }) {
  const { linkProps } = useScrollLink();
  return (
    <li className='nav-item'>
      <Link
        {...linkProps(sectionId, onNavigate)}
        className={mobileOnly ? 'nav-links-mobile' : 'nav-links'}
      >
        {label}
      </Link>
    </li>
  );
}

function Navbar() {
  const { t } = useTranslation();
  const [menuMobile, setMenuMobile] = useState(false);
  const [clickUtility, setClickUtility] = useState(false);

  const isVisible = useNavbarVisibility();
  const showContactButton = useViewportBreakpoint(960);
  const { linkProps } = useScrollLink();

  const closeMobileMenu = () => setMenuMobile(false);

  return (
    <nav className={`navbar${isVisible ? '' : ' hidden'}`} id='navbar'>
      <div className='navbar-container'>
        <Link {...linkProps('home', closeMobileMenu)} className='navbar-logo'>
          <div className='logo_home_img logo_englobe'>
            <img src='/images/logo.png' alt='my logo' className='logo_home_img' />
          </div>
        </Link>

        <div
          className={menuMobile ? 'menu-icon open' : 'menu-icon'}
          id='nav-icon'
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
              mobileOnly={item.mobileOnly}
              onNavigate={closeMobileMenu}
            />
          ))}
        </ul>

        {showContactButton && (
          <Link {...linkProps('contact', closeMobileMenu)} className='contact-button'>
            {t('navbar_contact')}
            <span className='contact-animation'></span>
          </Link>
        )}
      </div>
      <div
        className={clickUtility ? 'utility_container clicked' : 'utility_container'}
        onClick={() => setClickUtility((prev) => !prev)}
        onMouseLeave={() => setClickUtility(false)}
      >
        <i className='fa-solid fa-arrow-left' />
        <LanguageSelector />
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
