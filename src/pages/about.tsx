import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography variant="h1">ABOUT</Typography>
      <h1 className="text-center">{t('author')}</h1>
    </div>
  );
};

export default About;
