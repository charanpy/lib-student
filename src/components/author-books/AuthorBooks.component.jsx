import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import BookCardComponent from '../book-card/BookCard.component';
import BookCardHeader from '../book-card/BookCardHeader.component';
import LoadingIndicator from '../shared/loader/LoadingIndicator.component';

const fetchBooks = (id) => {
  return () =>
    new ApiRequest(`/book?author=${id}`, 'GET', null, null, true).request();
};

const AuthorBooks = ({ id }) => {
  const { data, isLoading } = useQuery(['author', 'book', id], fetchBooks(id), {
    enabled: !!id,
  });

  console.log(data, 22);

  if (isLoading) return <LoadingIndicator />;
  if (!data?.length)
    return (
      <p className='text-slate-800 dark:text-white text-center'>
        No Books Found
      </p>
    );
  return (
    <div className='space-y-4 py-5'>
      <p className='text-slate-800 dark:text-white capitalize'>
        <span className='text-green-500'>Author name: </span>
        {data?.[0]?.author?.authorName || ''}
      </p>
      <BookCardHeader />
      <BookCardComponent books={data} />
    </div>
  );
};

export default AuthorBooks;
