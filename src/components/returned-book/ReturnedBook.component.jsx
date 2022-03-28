import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import { BookCard } from '../book-card/BookCard.component';
import Container from '../shared/container/Container';
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
    <Container header='Returned Books'>
      {data?.map((book) => (
        <BookCard
          key={book?.bookId?._id}
          book={book?.bookId}
          issueDate={book?.issuedDate}
          expiryDate={book?.dueDate}
        />
      ))}
    </Container>
  );
};

export default ReturnBook;
