import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { HiX } from 'react-icons/hi';
import { VscGithubInverted } from 'react-icons/vsc';
import { RiLinkedinFill } from 'react-icons/ri';

import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CustomLink from './custom-link';
import Typography from './typography';
import { BiLogoGmail } from 'react-icons/bi';

const createDrawerPortal = () => {
  const drawer = document.createElement('div');
  drawer.setAttribute('id', 'drawer-root');
  return drawer;
};

type Props = {
  show: boolean;
  handleClose: () => void;
};
const MenuDrawer = ({ show, handleClose }: Props) => {
  const { t } = useTranslation('common');
  const bodyRef = useRef(document.querySelector('body'));
  const drawerPortalRef = useRef(
    document.getElementById('drawer-root') || createDrawerPortal(),
  );

  // Append portal root on mount
  useEffect(() => {
    const body = bodyRef.current;
    const drawerPortal = drawerPortalRef.current;
    if (!body) return;
    body.appendChild(drawerPortalRef.current);
    return () => {
      drawerPortal.remove();
      body.classList.remove('overflow-hidden');
    };
  }, []);

  // Handle overflow hidden on body
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    if (show) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [show]);

  // Handle close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (show) {
      window.addEventListener('keyup', handleEscape);
    }
    return () => window.removeEventListener('keyup', handleEscape);
  });
  return createPortal(
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className={cn('fixed inset-0 z-40 backdrop-blur-sm')}
            onClick={() => handleClose()}
          />
          <motion.div
            initial={{ x: 250 }}
            animate={{
              x: 5,
              transition: { duration: 0.4, delay: 0.5, type: 'spring' },
            }}
            exit={{ x: 250, transition: { duration: 0.4 } }}
            className={cn(
              'fixed right-0 top-0 z-50 h-full w-[250px] pr-[5px]',
              'flex flex-col gap-4 bg-background drop-shadow-lg',
            )}
          >
            <section className="flex justify-between px-4 py-2">
              <div className="flex items-center">
                <ModeToggle />
                |
                <I18nToggle />
              </div>
              <Button
                className="hover:bg-transparent"
                variant="ghost"
                size="icon"
                onClick={() => handleClose()}
              >
                <HiX className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </section>

            <div className="flex w-full flex-col items-center gap-2 p-2">
              {/* Links for sites */}
              <CustomLink href="/#hero-about" className="w-full">
                <Button
                  variant="social"
                  className="flex h-auto gap-2 py-4"
                  onClick={() => handleClose()}
                >
                  <Typography variant="button1">{t('nav.about')}</Typography>
                </Button>
              </CustomLink>
              <CustomLink href="/projects" className="w-full">
                <Button
                  variant="social"
                  className="flex h-auto gap-2 py-4"
                  onClick={() => handleClose()}
                >
                  <Typography variant="button1">{t('nav.projects')}</Typography>
                </Button>
              </CustomLink>

              <CustomLink href="http://www.google.com" className="w-full">
                <Button
                  variant="social"
                  className="flex h-auto gap-2 py-4"
                  onClick={() => handleClose()}
                >
                  <Typography variant="button1">{t('nav.resume')}</Typography>
                </Button>
              </CustomLink>
            </div>

            <Separator />
            {/* Links for socials media */}
            <div className="flex flex-col gap-2 p-2">
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
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    drawerPortalRef.current,
  );
};
export default MenuDrawer;
