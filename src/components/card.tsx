import * as React from 'react';

import { cn } from '@/lib/utils';
import Typography from './typography';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type SlotProps = {
  children: ReactNode;
  className?: string;
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { projectId: number }
>(({ className, ...props }, ref) => {
  const { projectId: _, ...rest } = props;
  return (
    <Link to={`/projects/${props.projectId}`}>
      <div
        ref={ref}
        className={cn('flex w-full flex-col gap-4', className)}
        {...rest}
      />
    </Link>
  );
});
Card.displayName = 'Card';

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <div className="h-[17rem] w-full overflow-hidden rounded-lg">
    <motion.img
      ref={ref}
      src="https://source.unsplash.com/random"
      className={cn('h-full w-full object-cover', className)}
      whileHover={{
        scale: 1.1,
        transition: { type: 'tween' },
      }}
    />
  </div>
  // <div
  //   ref={ref}
  //   className={cn(
  //     'h-[17rem] rounded-t-xl bg-cover bg-center bg-no-repeat',
  //     className,
  //     `bg-[url("https://source.unsplash.com/random")]`,
  //   )}
  //   {...props}
  // />
));
CardImage.displayName = 'CardImage';

const CardTitle = ({ children, className }: SlotProps) => {
  return (
    <Typography variant="h2" className={cn(className)}>
      {children}
    </Typography>
  );
};
// const CardTitle = React.forwardRef<
//   HTMLHeadingElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
//   <Typography variant="h3">jsdsdjksdjksdjkl</Typography>
// ));
CardTitle.displayName = 'CardTitle';

const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2', className)} {...props} />
));
CardTags.displayName = 'CardTags';

export { Card, CardImage, CardTags, CardTitle };
