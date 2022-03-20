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
      />
      <figcaption className='text-slate-700 dark:text-slate-200 text-lg capitalize'>
        {item?.title}
      </figcaption>
    </>
  );
};

export default BookCard;
