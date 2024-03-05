import { Card, CardImage, CardTags, CardTitle } from '@/components/card';
import { FaChevronRight } from 'react-icons/fa6';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const { t } = useTranslation('projects');
  const projects: ProjectItem[] = t('details', {
    returnObjects: true,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('title')}</title>
        <link rel="canonical" href="https://weicheng.dev/projects" />
      </Helmet>

      {/* HERO */}
      <header className="flex h-dvh w-full max-w-5xl flex-col items-start justify-center gap-8 p-8 md:p-14">
        <Typography variant="h1">{t('title')}</Typography>
        <Typography variant="p1">{t('brief')}</Typography>
      </header>
      {/* HERO */}

      {/* PROJECTS */}
      <section className="mb-[3.5rem] flex w-full max-w-5xl flex-col gap-28 px-8 py-20 md:px-14 md:py-28">
        {projects.map((project) => {
          return (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <Card>
                <CardImage>
                  <motion.img
                    src={project.images[0].src}
                    className={cn('h-full w-full object-cover object-top')}
                    whileHover={{
                      scale: 1.1,
                      transition: { type: 'tween' },
                    }}
                  />
                </CardImage>
                <div className="flex items-center justify-between">
                  <section className="flex flex-col gap-2">
                    <CardTags>
                      {project.tags.map((tag, index) => {
                        return (
                          <Typography
                            key={`${index}-${tag}`}
                            variant="span"
                            className="rounded bg-primary02 px-2 py-1 text-primary05"
                          >
                            {tag}
                          </Typography>
                        );
                      })}
                    </CardTags>
                    <CardTitle>{project.title}</CardTitle>
                  </section>

                  <FaChevronRight />
                </div>
              </Card>
            </Link>
          );
        })}
      </section>
      {/* PROJECTS */}
    </>
  );
};

export default Projects;
