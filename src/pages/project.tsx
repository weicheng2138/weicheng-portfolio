import { useEffect, useState } from 'react';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, CardImage } from '@/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ProjectParams = {
  title: string;
};
const Project = () => {
  const { t } = useTranslation();
  const { title } = useParams<ProjectParams>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
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

        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardImage>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  );
};

export default Project;
