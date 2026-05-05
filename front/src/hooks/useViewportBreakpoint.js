import { useEffect, useState } from 'react';

export function useViewportBreakpoint(breakpointPx) {
  const [isAbove, setIsAbove] = useState(() => window.innerWidth > breakpointPx);

  useEffect(() => {
    const handleResize = () => setIsAbove(window.innerWidth > breakpointPx);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpointPx]);

  return isAbove;
}
