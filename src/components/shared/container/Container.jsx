import React from 'react';

const Container = ({ header, children }) => {
  return (
    <div className='wrapper dark:bg-inherit'>
      <section className='pt-10'>
        <h1 className='dark:text-slate-300 text-slate-800 text-lg 2xl:text-2xl'>
          {header}
        </h1>
      </section>
      {children}
    </div>
  );
};

export default Container;
