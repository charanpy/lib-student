import React from 'react';
import './recent-books.css';

const BookCard = ({ item, height, width }) => {
  return (
    <>
      <img
        src={item?.image?.url || '/defaultBook.jpg'}
        loading='lazy'
        alt='book'
        className='bookCardImage'
        style={{
          width: width + 'px',
          height: height + 'px',
        }}
      />
      <figcaption className='text-slate-700 dark:text-slate-200 text-lg 2xl:text-xl capitalize'>
        {item?.title}
      </figcaption>
    </>
  );
};

export default BookCard;
