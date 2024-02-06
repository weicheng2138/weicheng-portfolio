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

// INFO: This is not a good implementation which is wrapped with Link in the Card component
// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & { projectId: number }
// >(({ className, ...props }, ref) => {
//   const { projectId: _, ...rest } = props;
//   return (
//     <Link to={`/projects/${props.projectId}`}>
//       <div
//         ref={ref}
//         className={cn('flex w-full flex-col gap-4', className)}
//         {...rest}
//       />
//     </Link>
//   );
// });
// Card.displayName = 'Card';
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex w-full flex-col gap-4', className)}
      {...props}
    />
  );
});
Card.displayName = 'Card';

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-[17rem] w-full overflow-hidden rounded-lg', className)}
    {...props}
  >
    {props.children}
  </div>
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
