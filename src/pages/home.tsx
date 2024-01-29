import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { VscGithubInverted } from 'react-icons/vsc';
import { RiLinkedinFill } from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import TextRoller from '@/components/text-roller';
import { Button } from '@/components/ui/button';
import CustomLink from '@/components/custom-link';

const Home = () => {
  console.log('Home rendered');
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <header className="flex h-dvh items-center justify-center">
        <TextRoller />
      </header>
      <main className="flex w-full flex-col items-center">
        {/* HERO */}
        <section className="flex w-full justify-center bg-gray02 dark:bg-gray05">
          <article
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-8 pb-[7.5rem] pt-40',
              'md:flex-row md:items-start md:gap-10',
            )}
          >
            <div className="flex w-full flex-col gap-2 md:max-w-96">
              <Typography variant="h2" className="text-3xl">
                {t('author')}
              </Typography>
              <Typography variant="h2" className="text-base">
                {t('author-reversed')}
              </Typography>
            </div>
            <div className="flex flex-col md:max-w-96">
              <Typography variant="p1" className="my-28 md:mb-10 md:mt-0">
                {t('home.hero-content')}
              </Typography>
              <div className="flex gap-4">
                <CustomLink href="/projects" className="w-full">
                  <Button variant="projects">{t('nav.projects')}</Button>
                </CustomLink>
                <CustomLink href="/resume" className="w-full">
                  <Button variant="border">{t('nav.resume')}</Button>
                </CustomLink>
              </div>
            </div>
          </article>
        </section>
        {/* HERO */}

        {/* CONTACT ME */}
        <section className="flex w-full justify-center bg-gray02 pb-[3.5rem] dark:bg-gray05">
          <article
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-8 pb-[7.5rem] pt-40',
              'md:flex-row md:items-start md:gap-10',
            )}
          >
            <div className="mb-28 md:mb-0 md:max-w-96">
              <Typography variant="h1" className="mb-8">
                {t('home.contact-title')}
              </Typography>
              <Typography variant="p1" className="mt-4">
                {t('home.contact-content')}
              </Typography>
            </div>
            <div className="flex w-full flex-col gap-2 md:max-w-96">
              <CustomLink href="https://github.com/weicheng2138">
                <Button variant="social" className="flex h-auto gap-2 py-4">
                  <VscGithubInverted className="h-[1.25rem] w-[1.25rem]" />
                  <Typography variant="button1">Github</Typography>
                </Button>
              </CustomLink>
              <CustomLink href="https://www.linkedin.com/in/wei-cheng-hung-3a40a0149/">
                <Button variant="social" className="flex h-auto gap-2 py-4">
                  <RiLinkedinFill className="h-[1.25rem] w-[1.25rem]" />
                  <Typography variant="button1">Linkedin</Typography>
                </Button>
              </CustomLink>

              <CustomLink href="mailto:weicheng2138@gmail.com">
                <Button variant="social" className="flex h-auto gap-2 py-4">
                  <BiLogoGmail className="h-[1.25rem] w-[1.25rem]" />
                  <Typography variant="button1">Gmail</Typography>
                </Button>
              </CustomLink>
            </div>
          </article>
        </section>
        {/* CONTACT ME */}
      </main>
    </>
  );
};

export default Home;
