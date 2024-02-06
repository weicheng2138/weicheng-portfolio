import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';

type ProjectParams = {
  title: string;
};
const Project = () => {
  const { t } = useTranslation();
  const { title } = useParams<ProjectParams>();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(title);
  return (
    <div>
      <Typography variant="h1">PROJECT</Typography>
      <h1 className="text-center">{t('author')}</h1>

      <div className="flex flex-col">
        {searchParams.get('q')}
        {searchParams.getAll('arr')}
        <button
          onClick={() => {
            setSearchParams({ q: 'TOTOTO' });
          }}
        >
          Change query to TOTOTO
        </button>
        <button
          onClick={() => {
            setSearchParams({ q: 'test' });
          }}
        >
          Change query to test
        </button>
      </div>
    </div>
  );
};

export default Project;
