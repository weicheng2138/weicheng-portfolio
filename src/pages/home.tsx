import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import TextRoller from '@/components/text-roller';

const Home = () => {
  console.log('Home rendered');
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex h-dvh items-center justify-center">
      {/* <Typography variant="h1">HOME</Typography> */}
      <TextRoller />
      {/* <button onClick={() => navigate('/about')}>To About</button> */}
    </div>
  );
};

export default Home;
