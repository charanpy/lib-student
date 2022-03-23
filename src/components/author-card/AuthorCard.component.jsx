import React from 'react';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import './author-card.css';

const AuthorCard = ({ author }) => {
  return (
    <div className='authorCardWrapper dark:bg-[#0A121A]'>
      <h1 className='authorName dark:text-white capitalize'>{author}</h1>
      <p className='text-green-500 row items-center cursor-pointer'>
        View Books <DownArrowSVG />
      </p>
    </div>
  );
};

const AuthorCardContainer = ({ authors }) => {
  return (
    <section className='row justify-center md:justify-between'>
      {authors?.map((author) => (
        <AuthorCard key={author?._id} author={author?.authorName} />
      ))}
    </section>
  );
};

export default AuthorCardContainer;
