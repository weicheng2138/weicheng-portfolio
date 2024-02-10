import { useEffect, useState } from 'react';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useSearchParams } from 'react-router-dom';
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
  const [project, setProject] = useState<ProjectItem | null>(null);
  const projects: ProjectItem[] = tProjects('details', {
    returnObjects: true,
  });
  console.log(projects);

  useEffect(() => {
    console.log(title);
    if (!title || !projects) return;

    const targetProject = projects.find((project) => project.id === title);
    if (!targetProject) return;
    setProject((prev) => targetProject);
  }, [title]);

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
          <section className="flex flex-col gap-1">
            <Typography variant="h2">{project?.title}</Typography>
          </section>

          <div className="flex flex-col">
            <Carousel setApi={setApi} className="w-full">
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
          <Typography variant="p1">{t('project.project-not-found')}</Typography>
        </div>
      )}
    </div>
  );
};

export default Project;
