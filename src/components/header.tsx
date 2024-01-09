import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';
import { HiCode, HiMenuAlt3 } from 'react-icons/hi';
import useBreakpoint from '@/hooks/useBreakpoint';

function Header() {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();

  return (
    <header className="fixed flex h-[4.5rem] w-full justify-center">
      <div className="flex w-full max-w-5xl items-center justify-between px-2 sm:px-4">
        <Button variant="ghost" size="icon">
          <HiCode className="h-[1.2rem] w-[1.2rem]" />
        </Button>

        <section className="flex items-center gap-2">
          {breakpoint === 'xs' ? (
            <Button variant="ghost" size="icon">
              <HiMenuAlt3 className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'bg-red-300 dark:bg-yellow-600' : ''
                }
                to="/about"
              >
                {t('nav.about')}
              </NavLink>
              <NavLink to="/projects">{t('nav.projects')}</NavLink>
              <Link to="http://google.com">{t('nav.resume')}</Link>
              <ModeToggle />
              |
              <I18nToggle />
            </>
          )}
        </section>
      </div>
    </header>
  );
}

export default Header;
