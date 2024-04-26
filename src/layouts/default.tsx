import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';
import MenuDrawer from '@/components/menu-drawer';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn, getScrollbarWidth } from '@/lib/utils';
import Footer from '@/components/footer';

const DefaultLayout = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const breakpoint = useBreakpoint();
  const scrollbarWidth = getScrollbarWidth();

  const handleDrawerClick = () => setToggleDrawer(() => !toggleDrawer);

  useEffect(() => {
    if (breakpoint !== 'xs') {
      setToggleDrawer(() => false);
    }
  }, [breakpoint]);

  useEffect(() => {
    if (toggleDrawer) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.paddingRight = `0px`;
    }
  }, [toggleDrawer, scrollbarWidth]);
  return (
    <div className={cn('relative flex flex-col items-center scroll-smooth')}>
      <Header className="z-30" handleDrawerClick={handleDrawerClick} />
      <MenuDrawer show={toggleDrawer} handleClose={handleDrawerClick} />
      <Outlet />

      <Footer />
    </div>
  );
};

export default DefaultLayout;
