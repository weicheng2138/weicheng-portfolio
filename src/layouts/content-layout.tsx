import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ContentLayout = () => {
  return (
    <main className={cn('relative min-h-dvh pt-[4.5rem]')}>
      <Outlet />
    </main>
  );
};

export default ContentLayout;
