import React from 'react';

const Footer = () => {
  return (
    <div className='text-slate-900 dark:text-white row centerAll py-10'>
      © Made with ❤ - {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
