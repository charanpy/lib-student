import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, delay: 1, duration: 2 },
  exit: { opacity: 0, duration: 2 },
};
const PageTransition = ({ children, route }) => {
  return (
    <motion.div
      key={route}
      initial='hidden'
      animate='enter'
      variants={variants}
      exit='exit'
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
