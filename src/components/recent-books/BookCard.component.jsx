import React from 'react';
import { Link } from 'react-router-dom';
import './recent-books.css';

const BookCard = ({ item, height, width }) => {
  return (
    <Link to={`/author/${item?.author}`}>
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
      <figcaption className='text-slate-700 text-center my-2 dark:text-slate-200 text-lg 2xl:text-xl capitalize'>
        {item?.title}
      </figcaption>
    </Link>
  );
};

export default BookCard;
