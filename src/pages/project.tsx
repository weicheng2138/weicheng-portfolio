import { useRef, useState } from 'react';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Card, CardImage } from '@/components/card';
import { FaChevronLeft } from 'react-icons/fa6';
import { TbFolderQuestion } from 'react-icons/tb';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselDotNavigation,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

type ProjectParams = {
  title: string;
};
const Project = () => {
  console.log('Rendering Project');
  const { t } = useTranslation('common');
  const { t: tProjects } = useTranslation('projects');
  const { title } = useParams<ProjectParams>();
  const projects: ProjectItem[] = tProjects('details', {
    returnObjects: true,
  });
  const project = projects.find((project) => project.id === title);

  const [api, setApi] = useState<CarouselApi>();
  const carouselPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <div className="h-full w-full px-8 md:px-14">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project ? project.title : t('nav.projects')}</title>
        <link rel="canonical" href="https://weicheng.dev/projects" />
      </Helmet>
      <Link to="/projects">
        <Button variant="ghost" className="mb-8">
          <FaChevronLeft />
          <Typography variant="button1" className="ml-2">
            {t('project.back-button')}
          </Typography>
        </Button>
      </Link>

      {project ? (
        <>
          <section className="mb-10 flex flex-col gap-2 md:mb-20">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => {
                return (
                  <Typography
                    key={`${index}-${tag}`}
                    variant="span"
                    className="rounded bg-primary02 px-2 py-[6px] text-primary05"
                  >
                    {tag}
                  </Typography>
                );
              })}
            </div>
            <Typography variant="h2">{project.title}</Typography>
          </section>

          <Carousel
            plugins={[carouselPlugin.current]}
            setApi={setApi}
            className="mb-10 w-full hover:cursor-grab active:cursor-grabbing md:mb-20"
          >
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={image.id}>
                  <Card>
                    <CardImage className="h-[308px]">
                      <motion.img
                        src={image.src}
                        className={cn('h-full w-full object-cover')}
                        whileHover={{
                          scale: 1.1,
                          transition: { type: 'tween' },
                        }}
                      />
                    </CardImage>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDotNavigation />
          </Carousel>

          <section>
            {project.contents.map((content, index) => {
              return (
                <div key={`${index}-${content.title}`} className="mb-10">
                  <Typography variant="h3" className="mb-6">
                    {content.title}
                  </Typography>
                  {content.isBulletPoint ? (
                    <ul>
                      {content.bulletPoints.map((point, index) => {
                        return (
                          <li
                            key={`${index}-${point}`}
                            className="ml-5 list-disc"
                          >
                            <Typography variant="p2">{point}</Typography>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <Typography variant="p2">{content.content}</Typography>
                  )}
                </div>
              );
            })}
          </section>
        </>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center gap-2">
          <TbFolderQuestion className="h-10 w-10" />
          <Typography variant="p1" className="text-xs">
            {t('project.project-not-found')}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Project;
