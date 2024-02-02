import { animateScroll as scroll } from 'react-scroll';

export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);

  if (element == null) {
    scroll.scrollToTop();
    return;
  }

  // Flag to check if scrolling is currently happening
  let isScrolling = false;

  // Function to handle the scroll event
  const handleScroll = () => {
    if (!isScrolling) {
      // When scrolling stops, initiate the second smooth scroll
      isScrolling = true;
      element.scrollIntoView({ behavior: 'smooth' });
      window.removeEventListener('scroll', handleScroll);
    }
  };

  // Add the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initiate the first smooth scroll
  element.scrollIntoView({ behavior: 'smooth' });
};

