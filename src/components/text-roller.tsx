import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type TextSize = 'small' | 'medium' | 'large';

type Props = {
  textArray: string[];
  size?: TextSize;
};
const TextRoller = ({ size = 'medium' }: Props) => {
  console.log('TextRoller rendered');

  const animationRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(240);
  useEffect(() => {
    const animationDiv = animationRef.current;
    if (!animationDiv) return;
    setDivHeight(animationDiv.children[0].clientHeight * 10);
    console.log(animationDiv.children.length);
    console.log(animationDiv.children[0].clientHeight);
  }, [divHeight]);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center font-fira text-[#e4bb68]',
        size === 'medium' && 'text-base',
        size === 'large' && 'text-2xl',
      )}
      style={{
        height: divHeight,
      }}
    >
      <h1>
        console
        <span className="text-gray-300">.</span>
        <span className="text-[#61afef]">log</span>('
      </h1>
      <div
        className={cn(
          'relative',
          "after:absolute after:top-0 after:z-50 after:h-full after:w-full after:bg-background after:transition-colors after:duration-500 after:content-['']",
          "before:absolute before:bottom-0 before:z-50 before:h-full before:w-full before:bg-background before:transition-colors before:duration-500 before:content-['']",
          size === 'medium' &&
            'translate-y-[36px] before:-translate-y-[96px] after:translate-y-[24px]',
          size === 'large' &&
            'translate-y-[50px] before:-translate-y-[128px] after:translate-y-[32px]',
        )}
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
      </div>
      <h1 className="">');</h1>
    </div>
  );
};

export default TextRoller;
