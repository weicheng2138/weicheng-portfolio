import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type TextSize = 'medium' | 'large';

type Props = {
  textArray: string[];
  size?: TextSize;
};
const TextRoller = ({ size = 'medium' }: Props) => {
  console.log('$$$ TextRoller rendered');

  const animationRef = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState(240);
  const [elementCount, setElementCount] = useState(0);

  const breakpoint = useBreakpoint();

  useEffect(() => {
    console.log('$$$ TextRoller useEffect');
    const animationDiv = animationRef.current;
    if (!animationDiv) return;
    setElementHeight(animationDiv.children[0].clientHeight);
    setElementCount(animationDiv.children.length);
    console.log(animationDiv.children.length);
    console.log(animationDiv.children[0].clientHeight);
  }, [elementHeight, breakpoint]);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center font-fira text-base text-[#e4bb68] md:text-2xl',
      )}
      style={{
        height: elementHeight * (elementCount * 2 + 2),
      }}
    >
      {breakpoint}
      <h1>
        console
        <span className="text-gray-300">.</span>
        <span className="text-[#61afef]">log</span>('
      </h1>
      <div
        className={cn(
          'relative',
          // "after:absolute after:top-0 after:z-50 after:h-full after:w-full after:bg-background after:transition-colors after:duration-500 after:content-['']",
          // "before:absolute before:bottom-0 before:z-50 before:h-full before:w-full before:bg-background before:transition-colors before:duration-500 before:content-['']",
          // size === 'medium' && 'translate-y-[36px]',
          // size === 'large' && 'translate-y-[30px]',
        )}
        style={{
          transform: `translateY(${elementHeight * 1.5}px)`,
        }}
      >
        <div
          ref={animationRef}
          className={cn(
            'flex animate-[move-large_6s-infinite] flex-col text-center',
            size === 'medium' && 'animate-[move-medium_6s_infinite]',
            size === 'large' && 'animate-[move-large_6s_infinite]',
          )}
        >
          <h1 className="relative text-[#e06c75]">Hello World!</h1>
          <h1 className="relative text-[#61afef]">こんにちは世界！</h1>
          <h1 className="relative text-[#98c379]">Hallo Welt!</h1>
          <h1 className="relative text-[#e5c07b]">您好世界！</h1>
        </div>

        {/* After Mask for roller */}
        <div
          className={cn('absolute inset-0 bg-background')}
          style={{
            transform: `translateY(${elementHeight}px)`,
          }}
        />

        {/* Before Mask for roller */}
        <div
          className={cn('absolute inset-0 bottom-0 bg-background')}
          style={{
            transform: `translateY(-${elementHeight * 4}px)`,
          }}
        />
      </div>
      <h1 className="">');</h1>
    </div>
  );
};

export default TextRoller;
