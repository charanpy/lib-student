import { AnimatePresence, motion } from 'framer-motion';

const modal = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

const Popup = ({ children, open, className }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={modal}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={className || ''}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
