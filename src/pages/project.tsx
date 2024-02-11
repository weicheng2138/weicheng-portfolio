import { useEffect, useRef, useState } from 'react';
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

type ProjectParams = {
  title: string;
};
const Project = () => {
  console.log('Rendering Project');
  const { t } = useTranslation('common');
  const { t: tProjects } = useTranslation('projects');
  const { title } = useParams<ProjectParams>();

  const [api, setApi] = useState<CarouselApi>();
  const carouselPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  // const [project, setProject] = useState<ProjectItem | null>(null);
  const projects: ProjectItem[] = tProjects('details', {
    returnObjects: true,
  });

  const project = projects.find((project) => project.id === title);

  return (
    <div className="h-full w-full px-8 md:px-14">
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
          <section className="mb-20 flex flex-col gap-2">
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

          <div className="flex flex-col">
            <Carousel
              plugins={[carouselPlugin.current]}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardImage className="h-[308px]">
                        <motion.img
                          src="https://placehold.co/600x400"
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
            {/* <div className="py-2 text-center text-sm text-muted-foreground"> */}
            {/*   Slide {current} of {count} */}
            {/* </div> */}
          </div>
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
