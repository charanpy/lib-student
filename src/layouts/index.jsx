import React from 'react';
import Footer from './footer/Footer.layout';
import Header from './header/Header.layout';

const AppLayout = ({ children }) => {
  return (
    <div className='bg-white dark:bg-[#0E1924] min-h-full'>
      <Header />
      <main className=''>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
