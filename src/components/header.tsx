import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { HiCode, HiMenuAlt3, HiDownload } from 'react-icons/hi';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

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
        'fixed flex h-[4.5rem] w-full justify-center transition',
        className,
        !isTop && 'border-b border-zinc-200 dark:border-zinc-800',
        'bg-radial-light backdrop-blur-sm backdrop-saturate-50 [background-size:4px_4px] dark:bg-radial-dark',
      )}
    >
      <div className="flex w-full max-w-5xl items-center justify-between px-2 sm:px-4">
        <Button variant="ghost" size="icon">
          <HiCode className="h-[1.2rem] w-[1.2rem]" />
        </Button>

        <section className="flex items-center gap-3">
          {breakpoint === 'md' ? (
            <>
              <NavLink
                className={({ isActive }) => isActive && 'text-primary'}
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
              <a
                href="http://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="resume" className="border-[1.5px]">
                  <div className="flex items-center gap-1">
                    <HiDownload className="h-[1.2rem] w-[1.2rem]" />
                    {t('nav.resume')}
                  </div>
                </Button>
              </a>
              <ModeToggle />
              |
              <I18nToggle />
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
      </div>
    </header>
  );
}

export default Header;
