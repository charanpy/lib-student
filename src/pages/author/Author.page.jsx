import React from 'react';
import Container from '../../components/shared/container/Container';
import useAuthor from './useAuthor';

const AuthorPage = () => {
  const [authorCards] = useAuthor();

  return <Container header='Authors'>{authorCards()}</Container>;
};

export default AuthorPage;
