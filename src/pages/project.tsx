import { useEffect, useState } from 'react';
import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';
import { Card, CardImage } from '@/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselDotNavigation,
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

  return (
    <div className="px-8 md:px-14">
      <Typography variant="h1">PROJECT</Typography>

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
    </div>
  );
};

export default Project;
