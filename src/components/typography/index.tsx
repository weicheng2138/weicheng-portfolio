import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type TagVariants = 'h1' | 'h2' | 'h3' | 'a';

type TypographyProps = {
  variant: TagVariants;
  children: ReactNode;
  className?: string;
};

function Typography({ variant, children, className }: TypographyProps) {
  const Tag = variant;
  return (
    <Tag className={cn('font-sans-tc text-3xl', className)}>{children}</Tag>
  );
}

export default Typography;
