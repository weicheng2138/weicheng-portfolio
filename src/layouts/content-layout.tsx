import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ContentLayout = () => {
  return (
    <main
      className={cn(
        'relative z-10 flex min-h-dvh w-full max-w-5xl flex-col items-center pb-14 pt-18',
        // 'relative flex min-h-dvh w-full max-w-5xl flex-col pb-14',
      )}
    >
      <Outlet />
    </main>
  );
};

export default ContentLayout;
