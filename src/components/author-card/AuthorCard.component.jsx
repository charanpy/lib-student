import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import './author-card.css';

const AuthorCard = ({ author }) => {
  return (
    <div className='authorCardWrapper dark:bg-[#0A121A]'>
      <h1 className='authorName dark:text-white capitalize'>
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
