import { useEffect, useState } from 'react';

enum Breakpoints {
  // width <= 450
  XS = 'xs',

  // 450 < width <= 768
  SM = 'sm',

  // width >= 768
  MD = 'md',
}

const getBreakpoint = (width: number | undefined): 'xs' | 'sm' | 'md' => {
  if (width === undefined) return Breakpoints.XS;
  if (width <= 450) return Breakpoints.XS;
  if (width <= 768) return Breakpoints.SM;
  return Breakpoints.MD;
};

const useBreakpoint = () => {
  const [width, setWidth] = useState<number | undefined>(() =>
    typeof window === 'undefined' ? undefined : window.innerWidth,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return getBreakpoint(width);
};

export default useBreakpoint;
