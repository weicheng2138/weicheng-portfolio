import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  const { t } = useTranslation();
  return (
    <header className="flex h-[4.5rem] items-center justify-end gap-2 p-4">
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
    </header>
  );
}

export default Header;
