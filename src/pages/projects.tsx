import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography variant="h1">PROJECTS</Typography>
    </div>
  );
};

export default Projects;
