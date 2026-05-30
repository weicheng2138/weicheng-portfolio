import {
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  textArray?: string[];
  className?: string;
};

const UNIQUE_LINES = [
  { text: 'Hello World!', color: 'text-[#e06c75]' },
  { text: 'こんにちは世界！', color: 'text-[#61afef]' },
  { text: 'Hallo Welt!', color: 'text-[#98c379]' },
  { text: '您好世界！', color: 'text-[#e5c07b]' },
];
const CYCLE = UNIQUE_LINES.length;
const REPEATS = 3;
const RENDER_LINES = Array.from(
  { length: REPEATS * CYCLE },
  (_, i) => UNIQUE_LINES[i % CYCLE],
);

const STEP_DURATION = 1;
const RESUME_AFTER_MS = 2000;

const TextRoller = ({ className }: Props) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [elementHeight, setElementHeight] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const y = useMotionValue(0);
  const controls = useAnimationControls();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    const animationDiv = animationRef.current;
    if (!animationDiv) return;
    const timer = setTimeout(() => {
      setElementHeight(animationDiv.children[0].clientHeight);
    }, 100);
    return () => clearTimeout(timer);
  }, [breakpoint]);

  // Cylindrical wrap: y is unbounded, but every change snaps it back into
  // the working range (-CYCLE*h, 0]. Because RENDER_LINES repeats the same
  // 4 unique lines 3 times, jumping by CYCLE*h lands on visually identical
  // content, so the wrap is invisible.
  useMotionValueEvent(y, 'change', (latest) => {
    if (!elementHeight) return;
    const cycle = CYCLE * elementHeight;
    if (latest > 0) y.set(latest - cycle);
    else if (latest <= -cycle) y.set(latest + cycle);
  });

  const snapToNearest = useCallback(
    (current: number) => {
      if (!elementHeight) return current;
      return Math.round(current / elementHeight) * elementHeight;
    },
    [elementHeight],
  );

  // Auto-roll while idle: advance one line, infinitely.
  useEffect(() => {
    if (isInteracting || !elementHeight) {
      controls.stop();
      return;
    }
    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        const cur = y.get();
        const snapped = snapToNearest(cur);
        if (Math.abs(snapped - cur) > 0.5) {
          try {
            await controls.start({
              y: snapped,
              transition: { duration: 0.3, ease: 'easeOut' },
            });
          } catch {
            break;
          }
          continue;
        }
        try {
          await controls.start({
            y: snapped - elementHeight,
            transition: { duration: STEP_DURATION, ease: 'easeInOut' },
          });
        } catch {
          break;
        }
      }
    };
    loop();
    return () => {
      cancelled = true;
    };
  }, [isInteracting, elementHeight, snapToNearest, y, controls]);

  const handleDragStart = () => {
    setIsInteracting(true);
    controls.stop();
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const handleDragEnd = async () => {
    const target = snapToNearest(y.get());
    try {
      await controls.start({
        y: target,
        transition: { duration: 0.3, ease: 'easeOut' },
      });
    } catch {
      // ignore — interrupted by a new interaction
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, RESUME_AFTER_MS);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center font-fira text-base text-[#e4bb68] sm:text-xl md:text-2xl',
        className,
      )}
    >
      <h1>
        console
        <span className="text-gray-300">.</span>
        <span className="text-[#61afef]">log</span>('
      </h1>
      <div
        className="relative overflow-hidden"
        style={{ height: elementHeight || '1em' }}
      >
        <motion.div
          ref={animationRef}
          className={cn(
            'flex select-none flex-col text-center touch-none',
            'cursor-grab active:cursor-grabbing',
          )}
          style={{ y }}
          drag="y"
          dragMomentum={false}
          dragElastic={0}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {RENDER_LINES.map(({ text, color }, index) => (
            <h1 key={index} className={cn('relative whitespace-nowrap', color)}>
              {text}
            </h1>
          ))}
        </motion.div>
      </div>
      <h1>');</h1>
    </div>
  );
};

export default TextRoller;
