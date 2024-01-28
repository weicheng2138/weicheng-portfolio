import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ContentLayout = () => {
  return (
    <main
      className={cn(
        'relative z-10 flex min-h-dvh w-full max-w-5xl flex-col pb-[3.5rem] pt-[4.5rem]',
        // 'relative flex min-h-dvh w-full max-w-5xl flex-col pb-[3.5rem]',
      )}
    >
      <Outlet />
    </main>
  );
};

export default ContentLayout;
