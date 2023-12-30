import { motion } from 'framer-motion';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type Props = {
  textArray: string[];
};
const TextRoller = (props: Props) => {
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
      <h1>
        console
        <span className="text-gray-300">.</span>
        <span className="text-[#61afef]">log</span>('
      </h1>
      <div
        className="relative"
        style={{
          transform: `translateY(${elementHeight * 1.5}px)`,
        }}
      >
        <motion.div
          ref={animationRef}
          className={cn('flex flex-col text-center')}
          animate={{
            translateY: [
              0,
              -elementHeight * 1,
              -elementHeight * 2,
              -elementHeight * 3,
              0,
            ],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            times: 1,
            repeat: Infinity,
          }}
        >
          <h1 className="relative text-[#e06c75]">Hello World!</h1>
          <h1 className="relative text-[#61afef]">こんにちは世界！</h1>
          <h1 className="relative text-[#98c379]">Hallo Welt!</h1>
          <h1 className="relative text-[#e5c07b]">您好世界！</h1>
        </motion.div>

        {/* After Mask for roller */}
        <div
          className={cn(
            'absolute inset-0 bg-background transition-colors duration-500',
          )}
          style={{
            transform: `translateY(${elementHeight}px)`,
          }}
        />

        {/* Before Mask for roller */}
        <div
          className={cn(
            'absolute inset-0 bottom-0 bg-background transition-colors duration-500',
          )}
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
