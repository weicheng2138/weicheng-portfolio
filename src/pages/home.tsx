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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const jobs: JobItem[] = t('home.experience.jobs', { returnObjects: true });
  console.log(jobs);

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
              'flex w-full max-w-5xl flex-col items-center justify-center px-14 pb-[7.5rem] pt-40',
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
          </article>
        </section>
        {/* HERO */}

        {/* EXPERIENCE */}
        <section className="flex w-full justify-center">
          <article
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-8 py-[7.5rem]',
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
                            className="basis-1/2 text-left text-gray05 dark:text-gray01"
                            variant="p1"
                          >
                            {job.title}
                          </Typography>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col rounded-xl bg-primary01 px-6 py-4 text-gray05 dark:bg-gray04 dark:text-gray01">
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
          </article>
        </section>
        {/* EXPERIENCE */}

        {/* CONTACT ME */}
        <section className="flex w-full justify-center bg-gray02 pb-[3.5rem] dark:bg-gray05">
          <article
            className={cn(
              'flex w-full max-w-5xl flex-col items-center justify-center px-14 pb-[7.5rem] pt-40',
              'md:flex-row md:items-start md:gap-10',
            )}
          >
            <div className="mb-28 md:mb-0">
              <Typography variant="h1" className="mb-8">
                {t('home.contact-title')}
              </Typography>
              <Typography variant="p1" className="mt-4">
                {t('home.contact-content')}
              </Typography>
            </div>
            <div className="flex w-full flex-col gap-2">
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
