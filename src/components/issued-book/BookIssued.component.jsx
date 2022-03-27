import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import { BookCard } from '../book-card/BookCard.component';
import Loader from '../shared/loader/Loader.component';

const fetchIssuedBook = () =>
  new ApiRequest(
    '/book-issue/student/issue-book-list',
    'GET',
    null,
    null,
    true
  ).request();

const BookIssue = () => {
  const { data, isLoading } = useQuery(['issue-book'], fetchIssuedBook);
  if (isLoading) return <Loader />;
  return (
    <div className='space-y-4'>
      <h1 className='text-slate-900 dark:text-white 2xl:text-xl'>
        Issued Books
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

export default BookIssue;
