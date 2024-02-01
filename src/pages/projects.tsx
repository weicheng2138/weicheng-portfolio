import { Card, CardImage, CardTags, CardTitle } from '@/components/card';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';

type ProjectItem = {
  id: number;
  title: string;
  tags: string[];
};
const Projects = () => {
  const { t } = useTranslation();
  const projects: ProjectItem[] = t('projects.details', {
    returnObjects: true,
  });
  return (
    <>
      {/* HERO */}
      <header className="flex h-dvh w-full max-w-5xl flex-col items-start justify-center gap-8 p-8 md:p-14">
        <Typography variant="h1">{t('nav.projects')}</Typography>
        <Typography variant="p1">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </Typography>
      </header>
      {/* HERO */}

      {/* PROJECTS */}
      <section className="flex w-full max-w-5xl flex-col gap-28 pb-[3.5rem]">
        {projects.map((project) => {
          return (
            <Card key={project.id}>
              <CardImage />
              <CardTags>
                {project.tags.map((tag, index) => {
                  return (
                    <Typography key={`${index}-${tag}`} variant="span">
                      {tag}
                    </Typography>
                  );
                })}
              </CardTags>
              <CardTitle>{project.title}</CardTitle>
            </Card>
          );
        })}
      </section>
      {/* PROJECTS */}
    </>
  );
};

export default Projects;
