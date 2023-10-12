import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type TagVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p1'
  | 'p2'
  | 'li'
  | 'span'
  | 'button1'
  | 'button2';

type TypographyProps = {
  variant: TagVariants;
  children: ReactNode;
  className?: string;
};

function Typography({ variant, children, className }: TypographyProps) {
  switch (variant) {
    case 'p1':
      return (
        <p
          className={cn(
            'indent-2 font-sans-tc text-base font-normal leading-6 tracking-wide',
            className,
          )}
        >
          {children}
        </p>
      );
    case 'p2':
      return (
        <p
          className={cn(
            'indent-6 font-sans-tc text-sm font-normal leading-6 tracking-wide',
            className,
          )}
        >
          {children}
        </p>
      );
    case 'button1':
      return (
        <span
          className={cn(
            'indent-2 font-sans-tc text-sm font-medium tracking-widest',
            className,
          )}
        >
          {children}
        </span>
      );
    case 'button2':
      return (
        <span
          className={cn(
            'indent-2 font-sans-tc text-sm font-bold tracking-widest',
            className,
          )}
        >
          {children}
        </span>
      );
  }

  const Tag = variant;
  switch (variant) {
    case 'h1':
      return (
        <Tag
          className={cn(
            'indent-2 font-sans-tc text-2xl font-bold tracking-wider',
            className,
          )}
        >
          {children}
        </Tag>
      );
    case 'h2':
      return (
        <Tag
          className={cn(
            'indent-2 font-sans-tc text-xl font-medium tracking-wide',
            className,
          )}
        >
          {children}
        </Tag>
      );
    case 'h3':
      return (
        <Tag
          className={cn(
            'indent-2 font-sans-tc text-base font-medium tracking-wider',
            className,
          )}
        >
          {children}
        </Tag>
      );
    case 'li':
      return (
        <Tag
          className={cn(
            'indent-2 font-sans-tc text-sm font-normal tracking-wide',
            className,
          )}
        >
          {children}
        </Tag>
      );
    case 'span':
      return (
        <Tag
          className={cn('indent-2 font-sans-tc text-xs font-medium', className)}
        >
          {children}
        </Tag>
      );
  }
}

export default Typography;
