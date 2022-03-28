import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import { BookCard } from '../book-card/BookCard.component';
import Loader from '../shared/loader/Loader.component';

const fetchReturnedBook = () =>
  new ApiRequest(
    '/book-issue/student/return-book-list',
    'GET',
    null,
    null,
    true
  ).request();

const ReturnBook = () => {
  const { data, isLoading } = useQuery(['return-book'], fetchReturnedBook);
  if (isLoading) return <Loader />;
  return (
    <div className='space-y-4'>
      <h1 className='text-slate-900 dark:text-white 2xl:text-xl'>
        Returned Books
      </h1>
      {data?.map((book) => (
        <BookCard
          key={book?.bookId?._id}
          book={book?.bookId}
          issueDate={book?.issuedDate}
          expiryDate={book?.dueDate}
        />
      ))}
    </div>
  );
};

export default ReturnBook;
