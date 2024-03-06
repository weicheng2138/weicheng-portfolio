import Typography from '@/components/typography';
import { useTranslation } from 'react-i18next';
import { VscGithubInverted } from 'react-icons/vsc';
import { RiLinkedinFill } from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import TextRoller from '@/components/text-roller';
import { Button } from '@/components/ui/button';
import CustomLink from '@/components/custom-link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

type JobItem = {
  id: number;
  period: string;
  company: string;
  title: string;
  description: {
    brief: string;
    details: string[];
  };
};
const Home = () => {
  console.log('Home rendered');
  const { t } = useTranslation('common');

  const jobs: JobItem[] = t('home.experience.jobs', { returnObjects: true });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('author')}</title>
        <link rel="canonical" href="https://weicheng.dev" />
      </Helmet>

      <header className="flex h-screen items-center justify-center">
        <TextRoller />
      </header>
      <main className="flex w-full flex-col items-center overflow-x-hidden">
        {/* HERO */}
        <section
          id="hero-about"
          className="flex w-full justify-center bg-gray02  pb-[7.5rem] pt-40 dark:bg-gray05"
        >
          <motion.article
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, type: 'spring', delay: 0.3 },
            }}
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-14',
              'md:flex-row md:items-start md:gap-10',
            )}
          >
            <div className="flex w-full basis-1/2 flex-col gap-2">
              <Typography variant="h2" className="text-3xl">
                {t('author')}
              </Typography>
              <Typography variant="h2" className="text-base">
                {t('author-reversed')}
              </Typography>
            </div>
            <div className="flex basis-1/2 flex-col">
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
          </motion.article>
        </section>
        {/* HERO */}

        {/* EXPERIENCE */}
        <section className="flex w-full justify-center py-[7.5rem]">
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, type: 'spring' },
            }}
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-8',
              'md:px-14',
            )}
          >
            <Accordion type="single" collapsible className="w-full">
              {jobs.map((job) => {
                return (
                  <AccordionItem key={job.id} value={job.id.toString()}>
                    <AccordionTrigger>
                      <div className="flex w-full items-center gap-3 md:gap-6">
                        <Typography
                          className="basis-1/3 text-left text-gray04 md:basis-2/12"
                          variant="span"
                        >
                          {job.period}
                        </Typography>
                        <div className="flex basis-5/6 flex-col gap-1 md:flex-row md:gap-6">
                          <Typography
                            className="basis-1/2 text-left text-gray05 dark:text-gray01"
                            variant="h3"
                          >
                            {job.company}
                          </Typography>
                          <Typography
                            className="basis-1/2 text-left text-gray04 dark:text-gray03"
                            variant="p1"
                          >
                            {job.title}
                          </Typography>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="flex md:gap-6">
                      <span className="md:basis-1/6" />
                      <div className="flex w-full flex-col rounded-xl bg-primary01 px-4 py-6 text-gray05 dark:bg-gray04 dark:text-gray01">
                        <Typography variant="p2">
                          {job.description.brief}
                        </Typography>
                        <br />
                        <ul className="ml-6 list-disc">
                          {job.description.details.map((detail, index) => {
                            return (
                              <li key={`${index}-${detail}`}>
                                <Typography variant="p2">{detail}</Typography>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.article>
        </section>
        {/* EXPERIENCE */}

        {/* CONTACT ME */}
        <section className="flex w-full justify-center bg-gray02 pb-[3.5rem] pt-40 dark:bg-gray05">
          <motion.article
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, type: 'spring' },
            }}
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-14 pb-[7.5rem]',
              'md:flex-row md:items-start md:gap-10',
            )}
          >
            <div className="mb-28 md:mb-0 md:basis-1/2">
              <Typography variant="h1" className="mb-8">
                {t('home.contact-title')}
              </Typography>
              <Typography variant="p1" className="mt-4">
                {t('home.contact-content')}
              </Typography>
            </div>
            <div className="flex w-full flex-col gap-2 md:basis-1/2">
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
          </motion.article>
        </section>
        {/* CONTACT ME */}
      </main>
    </>
  );
};

export default Home;
