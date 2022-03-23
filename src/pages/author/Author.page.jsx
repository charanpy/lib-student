import React from 'react';
import useAuthor from './useAuthor';

const AuthorPage = () => {
  const [authorCards] = useAuthor();
  return (
    <div className='wrapper dark:bg-inherit'>
      <section className='pt-10'>
        <h1 className='dark:text-slate-300 text-slate-800 text-lg 2xl:text-2xl'>
          Authors
        </h1>
      </section>
      {authorCards()}
    </div>
  );
};

export default AuthorPage;
