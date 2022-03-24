import React from 'react';
import { useParams } from 'react-router-dom';
import AuthorBooks from '../../components/author-books/AuthorBooks.component';

const AuthorBooksPage = () => {
  const params = useParams();
  return (
    <div className='wrapper dark:bg-inherit'>
      <section className='pt-10'>
        <h1 className='dark:text-slate-300 text-slate-800 text-lg 2xl:text-2xl capitalize'>
          Author Books
        </h1>
      </section>
      <AuthorBooks id={params?.authorId} />
    </div>
  );
};

export default AuthorBooksPage;
