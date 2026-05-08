import { useMemo } from 'react';
import { PROJECTS } from '../data/projects';

export const PROJECT_FILTERS = {
  ALL: 'all',
  BEST: 'best',
  RECENT: 'recent',
};

const COMPARATORS = {
  [PROJECT_FILTERS.BEST]: (a, b) => b.rating - a.rating,
  [PROJECT_FILTERS.RECENT]: (a, b) => b.date - a.date,
};

const TOP_N = 5;

export function useFilteredProjects(activeFilter, t) {
  const translatedProjects = useMemo(
    () =>
      PROJECTS.map((project) => ({
        ...project,
        title: t(project.titleKey),
        description: t(project.descriptionKey),
        alt: t(project.altKey),
        slides: project.slides.map((s) => ({ src: s.src, alt: t(s.altKey) })),
      })),
    [t]
  );

  return useMemo(() => {
    if (activeFilter === PROJECT_FILTERS.ALL) {
      return translatedProjects;
    }
    const comparator = COMPARATORS[activeFilter];
    return [...translatedProjects].sort(comparator).slice(0, TOP_N);
  }, [translatedProjects, activeFilter]);
}
