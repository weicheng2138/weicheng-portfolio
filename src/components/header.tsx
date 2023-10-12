import { useTranslation } from 'react-i18next';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
function Header() {
  const { t } = useTranslation();
  return (
    <header className="flex h-[4.5rem] items-center justify-end gap-2 p-4">
      <a>{t('nav.about')}</a>
      <a>{t('nav.projects')}</a>
      <a>{t('nav.resume')}</a>
      <ModeToggle />
      |
      <I18nToggle />
    </header>
  );
}

export default Header;
