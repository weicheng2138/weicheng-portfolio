import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

type ImageProps = React.ComponentPropsWithoutRef<'img'>;
const CustomImage = ({ src }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <motion.img
        src="/image_fallback.png"
        className={cn(
          'h-full w-full object-cover opacity-50',
          isLoading ? 'block' : 'hidden',
        )}
        whileHover={{
          scale: 1.1,
          transition: { type: 'tween' },
        }}
      />
      <motion.img
        src={src}
        className={cn(
          'h-full w-full object-cover object-top',
          isLoading ? 'hidden' : 'block',
        )}
        whileHover={{
          scale: 1.1,
          transition: { type: 'tween' },
        }}
        onLoad={onLoad}
      />
    </>
  );
};

export default CustomImage;
