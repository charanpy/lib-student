import React from 'react';
import Popup from '../shared/popup/Popup.component';

const BookDetailText = ({ name, value }) => {
  if (!name || !value) return null;
  return (
    <p className='bookDetailWrap'>
      <span className='bookDetailHeader'>{name}</span>:{' '}
      <span className='bookDetailData'>{value}</span>
    </p>
  );
};

const BookDetails = ({ open, toggle, book }) => {
  return (
    <Popup open={open} className='bookDetailPopup row centerAll'>
      <div className='bookDetailCard'>
        <span className='bookDetailClose' onClick={toggle}>
          &#10006;
        </span>
        <div className='row centerAll'>
          <img
            src='/defaultBook.jpg'
            alt='book'
            className='object-cover rounded-md shadow-lg'
            width={200}
            height={200}
          />
        </div>
        <div className='space-y-2'>
          <BookDetailText name='title' value={book?.title} />
          <BookDetailText name='author' value={book?.author?.authorName} />
          <BookDetailText name='category' value={book?.category} />
          <BookDetailText name='code' value={book?.code} />
          <BookDetailText name='publisher' value={book?.publisher} />
          <BookDetailText name='edition' value={book?.edition} />
          <BookDetailText name='price' value={book?.price} />
          <BookDetailText name='pages' value={book?.totalPages} />
          <BookDetailText
            key='availability'
            value={book?.totalCount ? 'Yes' : 'No'}
          />
        </div>
      </div>
    </Popup>
  );
};

export default BookDetails;
