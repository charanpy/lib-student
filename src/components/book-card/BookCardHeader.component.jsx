import React from 'react';

const BookCardHeader = () => {
  return (
    <div className='row bookCardHeader space-x-2'>
      <h1 className='text-slate-600 dark:text-slate-300 w-1/2'>BOOK DETAILS</h1>
      <h1 className='text-slate-600 dark:text-slate-300 w-1/4'>CATEGORY</h1>
      <h1 className='text-slate-600 dark:text-slate-300'>ACTIONS</h1>
    </div>
  );
};

export default BookCardHeader;
