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
        <Typography variant="h1">工作經驗</Typography>
        <Typography variant="h2">{t('author')}</Typography>
        <Typography variant="h3">{t('author')}</Typography>
        <Typography variant="p1">{t('author')}</Typography>
        <Typography variant="p2">{t('author')}</Typography>
        <Typography variant="li">{t('author')}</Typography>
        <Typography variant="button1">{t('author')}</Typography>
        <Typography variant="button2">{t('author')}</Typography>
        <Typography variant="span">{t('author')}</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
