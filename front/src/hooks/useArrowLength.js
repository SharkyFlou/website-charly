import { useCallback, useLayoutEffect } from 'react';

const ARROW_OFFSET = 400;

export function useArrowLength(ref, deps = []) {
  const updateArrowLength = useCallback(() => {
    if (!ref.current) return;
    const length = ref.current.offsetHeight - ARROW_OFFSET;
    ref.current.style.setProperty('--len-arrow', `${length}px`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useLayoutEffect(() => {
    const id = window.setTimeout(updateArrowLength, 100);
    window.addEventListener('resize', updateArrowLength);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', updateArrowLength);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateArrowLength, ...deps]);

  return updateArrowLength;
}
