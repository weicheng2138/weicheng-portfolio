import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1">HOME</Typography>
      <h1 className="text-center">{t('author')}</h1>
      <button onClick={() => navigate('/about')}>To About</button>
    </div>
  );
};

export default Home;
