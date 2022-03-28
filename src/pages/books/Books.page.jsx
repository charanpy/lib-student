import React from 'react';
import { useParams } from 'react-router-dom';
import useBook from './useBook';

const BooksPage = () => {
  const params = useParams();

  const [bookFilters] = useBook(params?.authorId);
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
