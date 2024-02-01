import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl border bg-card text-card-foreground shadow',
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { url?: string }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'h-[17rem] rounded-t-xl bg-cover bg-center bg-no-repeat',
      className,
      `bg-[url("https://source.unsplash.com/random")]`,
    )}
    {...props}
  />
));
CardImage.displayName = 'CardImage';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn(className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2 p-6 pt-0', className)} {...props} />
));
CardTags.displayName = 'CardTags';

export { Card, CardImage, CardTags, CardTitle };
