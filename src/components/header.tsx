import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { HiCode, HiMenuAlt3, HiDownload } from 'react-icons/hi';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import CustomLink from './custom-link';
import Typography from './typography';

type Props = {
  className?: string;
  handleDrawerClick: () => void;
};
function Header({ handleDrawerClick, className }: Props) {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();

  // Detect scroll position
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTop]);

  return (
    <header
      className={cn(
        'fixed top-0 flex h-[4.5rem] w-full justify-center transition',
        className,
        !isTop && 'border-b border-zinc-200 dark:border-zinc-800',
        'bg-radial-light backdrop-blur-sm backdrop-saturate-50 [background-size:4px_4px] dark:bg-radial-dark',
      )}
    >
      <nav className="flex w-full max-w-5xl items-center justify-between px-2 text-gray05 dark:text-gray02 sm:px-4">
        <NavLink to="/">
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <HiCode className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </NavLink>

        <section className="flex items-center gap-6">
          {breakpoint === 'md' ? (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to="/about"
              >
                {t('nav.about')}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to="/projects"
              >
                {t('nav.projects')}
              </NavLink>
              <CustomLink
                href="http://www.google.com"
                className="flex flex-row items-center gap-2 rounded-full border-2 border-gray05 px-4 py-2 transition-colors hover:bg-gray02 dark:border-gray02 hover:dark:bg-gray05"
              >
                <HiDownload className="h-[1.2rem] w-[1.2rem]" />
                {t('nav.resume')}
              </CustomLink>

              <section className="flex h-full items-center gap-1">
                <ModeToggle />
                |
                <I18nToggle />
              </section>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDrawerClick()}
            >
              <HiMenuAlt3 className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          )}
        </section>
      </nav>
    </header>
  );
}

export default Header;
