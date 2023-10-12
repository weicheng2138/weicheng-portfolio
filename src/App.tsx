import { ThemeProvider } from '@/components/theme-provider';
import { useTranslation } from 'react-i18next';
import Typography from '@/components/typography';
import Header from '@/components/header';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <h1 className="text-center">{t('author')}</h1>
        <Typography variant="h2">{t('author')}</Typography>
        <Typography variant="a">{t('author')}</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
