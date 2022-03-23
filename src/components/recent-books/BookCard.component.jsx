import React from 'react';
import './recent-books.css';

const BookCard = ({ item }) => {
  return (
    <>
      <img
        src={item?.image?.url}
        loading='lazy'
        alt='book'
        className='bookCardImage'
        as
      />
      <figcaption className='text-slate-700 dark:text-slate-200 text-lg 2xl:text-xl capitalize'>
        {item?.title}
      </figcaption>
    </>
  );
};

export default BookCard;
