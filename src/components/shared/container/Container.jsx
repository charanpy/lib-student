import React from 'react';
import Button from '../button/Button.component';

const Container = ({ header, children, btnText, onClick }) => {
  return (
    <div className='wrapper dark:bg-inherit'>
      <section className='pt-10 row justify-between'>
        <h1 className='dark:text-slate-300 text-slate-800 text-lg 2xl:text-2xl'>
          {header}
        </h1>
        {btnText && (
          <Button
            className='py-1 px-2.5 bg-red-500 text-white rounded-lg'
            onClick={onClick}
          >
            {btnText}
          </Button>
        )}
      </section>
      {children}
    </div>
  );
};

export default Container;
