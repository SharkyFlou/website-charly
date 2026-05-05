import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { PROJECT_FILTERS, useFilteredProjects } from './useFilteredProjects';
import { PROJECTS } from '../data/projects';

const identityT = (key) => key;

describe('useFilteredProjects', () => {
  it('returns all projects untouched for ALL filter', () => {
    const { result } = renderHook(() => useFilteredProjects(PROJECT_FILTERS.ALL, identityT));
    expect(result.current).toHaveLength(PROJECTS.length);
  });

  it('caps the result to top 5 for BEST and RECENT filters', () => {
    const { result: best } = renderHook(() =>
      useFilteredProjects(PROJECT_FILTERS.BEST, identityT)
    );
    const { result: recent } = renderHook(() =>
      useFilteredProjects(PROJECT_FILTERS.RECENT, identityT)
    );
    expect(best.current).toHaveLength(5);
    expect(recent.current).toHaveLength(5);
  });

  it('sorts BEST filter by descending rating', () => {
    const { result } = renderHook(() => useFilteredProjects(PROJECT_FILTERS.BEST, identityT));
    const ratings = result.current.map((p) => p.rating);
    expect(ratings).toEqual([...ratings].sort((a, b) => b - a));
  });

  it('sorts RECENT filter by descending date', () => {
    const { result } = renderHook(() => useFilteredProjects(PROJECT_FILTERS.RECENT, identityT));
    const dates = result.current.map((p) => p.date);
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });

  it('translates project keys into the resolved values', () => {
    const tMap = (key) => `T(${key})`;
    const { result } = renderHook(() => useFilteredProjects(PROJECT_FILTERS.ALL, tMap));
    const first = result.current[0];
    expect(first.title).toBe(`T(${PROJECTS[0].titleKey})`);
    expect(first.description).toBe(`T(${PROJECTS[0].descriptionKey})`);
  });
});
