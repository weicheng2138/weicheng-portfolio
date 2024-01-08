import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
