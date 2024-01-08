import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Link, NavLink } from 'react-router-dom';
import { HiCode } from 'react-icons/hi';

function Header() {
  const { t } = useTranslation();
  return (
    <header className="fixed flex h-[4.5rem] w-full justify-center">
      <div className="flex w-full max-w-5xl items-center justify-between px-2 sm:px-4">
        <HiCode className="h-10 w-10" />

        <section className="flex items-center gap-2">
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
        </section>
      </div>
    </header>
  );
}

export default Header;
