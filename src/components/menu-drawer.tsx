import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '@/components/mode-toggle';
import { I18nToggle } from '@/components/i18n-toggle';
import { Button } from '@/components/ui/button';
import { HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

type Props = {
  show: boolean;
  handleClose: () => void;
};
const MenuDrawer = ({ show, handleClose }: Props) => {
  const { t } = useTranslation();
  const bodyRef = useRef(document.querySelector('body'));

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    if (show) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [show]);
  return (
    <>
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className={cn('absolute inset-0 z-40 backdrop-blur-sm')}
              onClick={() => handleClose()}
            />
            <motion.div
              initial={{ x: 300 }}
              animate={{
                x: 0,
                transition: { duration: 0.4, delay: 0.5, ease: 'easeInOut' },
              }}
              exit={{ x: 300, transition: { duration: 0.4 } }}
              className={cn(
                'fixed right-0 top-0 z-50 h-full w-[300px]',
                'flex flex-col gap-4 bg-background p-6',
              )}
            >
              <section className="flex justify-between">
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

              <div className="flex flex-col gap-2 p-2">
                <NavLink to="/about" onClick={() => handleClose()}>
                  {t('nav.about')}
                </NavLink>
                <NavLink to="/projects" onClick={() => handleClose()}>
                  {t('nav.projects')}
                </NavLink>
                <Link to="http://google.com" onClick={() => handleClose()}>
                  {t('nav.resume')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default MenuDrawer;
