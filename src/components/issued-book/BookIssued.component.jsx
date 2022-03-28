import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import { BookCard } from '../book-card/BookCard.component';
import Container from '../shared/container/Container';
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
  return (
    <Container header='Issued Books'>
      {!isLoading ? (
        data?.map((book) => (
          <BookCard
            key={book?.bookId?._id}
            book={book?.bookId}
            issueDate={book?.issuedDate}
            expiryDate={book?.dueDate}
          />
        ))
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default BookIssue;
