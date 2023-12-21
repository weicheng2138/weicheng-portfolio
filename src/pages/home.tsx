import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Home = () => {
  console.log('Home rendered');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const animationRef = useRef<HTMLDivElement>(null);
  const [animationElementHeightClass, setAnimationElementHeightClass] =
    useState<string | null>(null);
  useEffect(() => {
    console.log('useEffect');
    if (animationRef.current) {
      const childrenLength = animationRef.current.children.length;
      const childrenElementHeight =
        animationRef.current.children[0].clientHeight;
      animationRef.current.children[0].clientHeight;
      console.log(animationRef.current.children.length);
      console.log(animationRef.current.children[0].clientHeight);
      setAnimationElementHeightClass(
        `after:h-[${animationRef.current.children[0].clientHeight * 100}px]`,
      );
    }
  }, [animationRef, animationElementHeightClass]);
  return (
    <div>
      <Typography variant="h1">HOME</Typography>
      <h1 className="text-center">{t('author')}</h1>
      <div className="relative flex h-[240px] items-center justify-center font-fira text-[#e4bb68]">
        <h1>
          console
          <span className="text-gray-300">.</span>
          <span className="text-[#61afef]">log</span>('
        </h1>
        <div
          className={cn(
            'relative translate-y-[36px]',
            "after:absolute after:top-0 after:z-50 after:h-full after:w-full after:translate-y-[24px] after:bg-background after:transition-colors after:duration-500 after:content-['']",
            "before:absolute before:bottom-0 before:z-50 before:h-full before:w-full before:-translate-y-[96px] before:bg-background before:transition-colors before:duration-500 before:content-['']",
          )}
        >
          <div
            ref={animationRef}
            className="flex animate-[move_6s_infinite] flex-col text-center"
          >
            <h1 className="relative text-[#e06c75]">Hello World!</h1>
            <h1 className="relative text-[#61afef]">こんにちは世界！</h1>
            <h1 className="relative text-[#98c379]">Hallo Welt!</h1>
            <h1 className="relative text-[#e5c07b]">您好世界！</h1>
          </div>
        </div>
        <h1 className="">');</h1>
      </div>
      <button onClick={() => navigate('/about')}>To About</button>
    </div>
  );
};

export default Home;
