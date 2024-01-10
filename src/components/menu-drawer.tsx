import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  show: boolean;
  className?: string;
  handleClose: () => void;
};
const MenuDrawer = ({ show, className, handleClose }: Props) => {
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
              className={cn(
                'absolute inset-0 z-40 backdrop-blur-sm',
                className,
              )}
              onClick={() => handleClose()}
            />
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }}
              className={cn(
                'absolute inset-y-0 right-0 z-50 w-[300px] bg-red-300',
                className,
              )}
            >
              YOYOYO
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default MenuDrawer;
