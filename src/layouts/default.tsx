import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';
import MenuDrawer from '@/components/menu-drawer';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';

const DefaultLayout = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const breakpoint = useBreakpoint();

  const handleDrawerClick = () => setToggleDrawer(() => !toggleDrawer);

  useEffect(() => {
    if (breakpoint !== 'xs') {
      setToggleDrawer(() => false);
    }
  }, [breakpoint]);
  return (
    <div className={cn('relative')}>
      <Header className="z-30" handleDrawerClick={handleDrawerClick} />
      <MenuDrawer show={toggleDrawer} handleClose={handleDrawerClick} />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
