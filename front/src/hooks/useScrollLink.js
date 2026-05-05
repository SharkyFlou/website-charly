import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollTo } from '../components/Scroll';

export function useScrollLink() {
  const { search } = useLocation();

  const buildHref = useCallback((sectionId) => `/${search}#${sectionId}`, [search]);

  const linkProps = useCallback(
    (sectionId, beforeScroll) => ({
      to: buildHref(sectionId),
      onClick: () => {
        if (beforeScroll) beforeScroll();
        scrollTo(sectionId);
      },
    }),
    [buildHref]
  );

  return { buildHref, linkProps };
}
