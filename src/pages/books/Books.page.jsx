import React from 'react';
import useBook from './useBook';

const BooksPage = () => {
  const [bookFilters] = useBook();
  return (
    <div className='wrapper dark:bg-inherit'>
      <section className='pt-10'>
        <h1 className='dark:text-slate-300 text-slate-800 text-lg 2xl:text-2xl'>
          Books
        </h1>
      </section>
      {bookFilters()}
    </div>
  );
};

export default BooksPage;
