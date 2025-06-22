import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { NavLink, useLocation } from 'react-router-dom';
import { HiCode, HiMenuAlt3, HiDownload } from 'react-icons/hi';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import CustomLink from './custom-link';
import Typography from './typography';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import config from '@/config.json';

type Props = {
  className?: string;
  handleDrawerClick: () => void;
};
function Header({ handleDrawerClick, className }: Props) {
  const { t, i18n } = useTranslation('common');
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

  // Handle anchor links scroll to
  useScrollToAnchor();

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 flex h-[4.5rem] w-full justify-center transition',
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
                to="/#hero-about"
              >
                <Typography variant="button1">{t('nav.about')}</Typography>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'text-primary' : '')}
                to="/projects"
              >
                <Typography variant="button1">{t('nav.projects')}</Typography>
              </NavLink>
              <CustomLink
                isFile
                href={`/${i18n.language === 'en' ? config.resumeEn : config.resumeZh}`}
                className="flex flex-row items-center gap-2 rounded-full border-2 border-gray05 px-4 py-2 transition-colors hover:bg-gray02 dark:border-gray02 hover:dark:bg-gray05"
              >
                <HiDownload className="h-[1.2rem] w-[1.2rem]" />
                <Typography variant="button1">{t('nav.resume')}</Typography>
                <span className="sr-only">Download resume</span>
              </CustomLink>

              <section className="flex h-full items-center gap-1">
                <ModeToggle />
                |
                <I18nToggle />
              </section>
            </>
          ) : (
            <Button
              className="hover:bg-transparent"
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
