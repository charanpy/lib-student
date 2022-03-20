import { motion } from 'framer-motion';
import React from 'react';

const Button = (props) => {
  return (
    <motion.button {...props} whileTap={{ scale: 0.9 }}>
      {props.children}
    </motion.button>
  );
};

export default Button;
