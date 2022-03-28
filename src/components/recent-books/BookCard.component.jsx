import React from 'react';
import { Link } from 'react-router-dom';
import './recent-books.css';

const BookCard = ({ item, height, width }) => {
  return (
    <Link
      to={`/author/${item?.author}`}
      style={{
        width: +width + 50 + 'px',
        height: +height + 50 + 'px',
      }}
    >
      <img
        src={item?.image?.url || '/defaultBook.jpg'}
        loading='lazy'
        alt='book'
        className='bookCardImage rounded-lg'
        style={{
          width: width + 'px',
          height: height + 'px',
        }}
      />
      <figcaption
        style={{
          width: width + 'px',
          height: height + 'px',
        }}
        className='truncate text-slate-700 text-center my-2t; dark:text-slate-200 text-lg 2xl:text-xl capitalize'
      >
        {item?.title}
      </figcaption>
    </Link>
  );
};

export default BookCard;
