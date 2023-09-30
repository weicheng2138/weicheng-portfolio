import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <header className="flex h-[4.5rem] items-center justify-end gap-2 p-4">
          <a>{t('nav.about')}</a>
          <a>{t('nav.projects')}</a>
          <a>{t('nav.resume')}</a>
          <ModeToggle />
          |
          <I18nToggle />
        </header>
        <h1 className="my-4 text-center text-4xl">{t('author')}</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
