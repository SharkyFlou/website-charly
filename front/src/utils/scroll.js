import { animateScroll as scroll } from 'react-scroll';

const SETTLE_DELAY_MS = 600;

export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);

  if (element == null) {
    scroll.scrollToTop();
    return;
  }

  let hasReadjusted = false;

  const readjust = () => {
    if (hasReadjusted) return;
    hasReadjusted = true;
    window.removeEventListener('scroll', onScroll);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const onScroll = () => {
    window.requestAnimationFrame(readjust);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.setTimeout(readjust, SETTLE_DELAY_MS);

  element.scrollIntoView({ behavior: 'smooth' });
};
