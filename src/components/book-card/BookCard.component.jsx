import React, { memo, useState } from 'react';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import './book-card.css';
import BookDetails from './BookDetails.component';

export const formatDate = (date) => {
  const formatDate = new Date(date);
  return `${formatDate?.getFullYear()}/${formatDate?.getMonth()}/${formatDate?.getDay()}`;
};

export const formatDueDate = (date, issue = false) => {
  return `${issue ? 'Issue' : 'Due'}- ${formatDate(date)}`;
};

export const BookCard = ({ book, expiryDate, issueDate }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((open) => !open);
  };
  return (
    <div
      key={book?._id}
      className='row shadow-md rounded-sm bg-white dark:bg-[#0A121A] p-4 bookCard space-x-2'
    >
      <div className='flex flex-row items-center w-1/2 bookDetails'>
        <figure>
          <img
            src={book?.image?.url || '/defaultBook.jpg'}
            width={100}
            height={100}
            alt='book'
            className='object-cover min-w-[100px] min-h-[100px]'
          />
        </figure>
        <figcaption className='ml-4 flex flex-col space-y-2'>
          <h1 className='font-normal capitalize text-xl text-black dark:text-white 2x:text-2xl'>
            {book?.title || ''}
          </h1>
          <p className='text-slate-600 capitalize dark:text-slate-200 2x:text-xl'>
            {book?.author?.authorName || ''}
          </p>
          <p className='text-slate-600 capitalize dark:text-slate-200 2x:text-xl'>
            {book?.code || ''}
          </p>
        </figcaption>
      </div>
      <div className='row justify-start items-center w-1/4 bookCategory'>
        {issueDate && (
          <div
            className={`py-1 category px-2 m-2 text-sm rounded-md bg-green-500
          } text-white 2xl:text-xl`}
          >
            {formatDueDate(issueDate, true)}
          </div>
        )}
        <div
          className={`py-1 category px-2 m-2 text-sm rounded-md bg-gray-700 ${
            expiryDate ? 'bg-red-500' : ''
          } text-white 2xl:text-xl`}
        >
          {expiryDate ? formatDueDate(expiryDate) : book?.category}
        </div>
      </div>
      <div className='row items-center bookInfo'>
        <button
          onClick={toggleModal}
          className='text-green-500 px-2 row items-center'
        >
          View Details <DownArrowSVG />
        </button>
      </div>
      <BookDetails open={modal} toggle={toggleModal} book={book} />
    </div>
  );
};

const BookCardComponent = memo(({ books }) => {
  console.log('Book Card', books?.length);
  return (
    <>
      {books.map((book) => (
        <BookCard key={book?._id} book={book} />
      ))}
    </>
  );
});

export default BookCardComponent;
