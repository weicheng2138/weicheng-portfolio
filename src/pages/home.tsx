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
    <>
      <div className="flex h-dvh items-center justify-center">
        {/* <Typography variant="h1">HOME</Typography> */}
        <TextRoller className="z-10" />
        {/* <button onClick={() => navigate('/about')}>To About</button> */}
      </div>
      <main className="w-full max-w-5xl pb-[3.5rem]">
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </main>
    </>
  );
};

export default Home;
