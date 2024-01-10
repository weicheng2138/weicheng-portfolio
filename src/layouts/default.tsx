import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';
import MenuDrawer from '@/components/menu-drawer';
import useBreakpoint from '@/hooks/useBreakpoint';

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
    <div className="relative">
      <Header handleDrawerClick={handleDrawerClick} />
      <MenuDrawer show={toggleDrawer} handleClose={handleDrawerClick} />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
