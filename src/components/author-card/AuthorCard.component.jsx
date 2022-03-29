import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import DownArrowSVG from '../shared/svg/DownArrow.svg';

const AuthorCard = ({ author }) => {
  return (
    <div className='shadow-md rounded-lg bg-white p-4 w-1/2 md:w-1/4 space-y-4 mr-4 mb-4 dark:bg-[#0a121a]'>
      <h1 className='2xl:text-xl text-slate-800 dark:text-white capitalize'>
        {author?.authorName}
      </h1>
      <div>
        <Link to={`${author?._id}`}>
          <p className='text-green-500 row items-center cursor-pointer'>
            View Books <DownArrowSVG />
          </p>
        </Link>
      </div>
    </div>
  );
};

const AuthorCardContainer = memo(({ authors }) => {
  console.log(authors.length);
  return (
    <section className='row justify-center md:justify-between'>
      {authors?.map((author) => (
        <AuthorCard key={author?._id} author={author} />
      ))}
    </section>
  );
});

export default AuthorCardContainer;
