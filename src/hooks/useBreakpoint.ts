import { useEffect, useState } from 'react';

enum Breakpoints {
  // width <= 450
  XS = 'xs',

  // 450 < width <= 768
  SM = 'sm',

  // width >= 768
  MD = 'md',
}

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState<'xs' | 'sm' | 'md'>('xs');
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowSize.width === undefined) return;
    if (0 < windowSize.width && windowSize.width <= 450) {
      setBreakPoint(Breakpoints.XS);
    }
    if (450 < windowSize.width && windowSize.width <= 768) {
      setBreakPoint(Breakpoints.SM);
    }
    if (windowSize.width > 768) {
      setBreakPoint(Breakpoints.MD);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);

  return breakpoint;
};

export default useBreakpoint;
