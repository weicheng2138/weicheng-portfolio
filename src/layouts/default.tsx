import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
