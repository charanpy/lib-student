import { AnimatePresence, motion } from 'framer-motion';

const modal = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

const Popup = ({ children, open }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={modal}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
