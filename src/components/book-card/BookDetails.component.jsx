import React, { useEffect } from 'react';
import ApiRequest from '../../lib/ApiRequest';
import Popup from '../shared/popup/Popup.component';

const BookDetailText = ({ name, value }) => {
  if (!name || !value) return null;
  return (
    <p className='m-2'>
      <span className='font-semibold 2xl:text-xl capitalize'>{name}</span>:{' '}
      <span className='text-slate-900 2xl:text-xl capitalize'>{value}</span>
    </p>
  );
};

const BookDetails = ({ open, toggle, book, id }) => {
  useEffect(() => {
    if (!open) return;
    (async () => {
      await new ApiRequest(`/book/visit/${id}`, 'POST').request();
    })();
  }, [id, open]);
  return (
    <Popup open={open} className='bookDetailPopup row centerAll'>
      <div className='flex flex-col bg-gray-200 rounded-lg shadow-lg w-[300px] min-h-[300px] p-2 space-y-4 relative'>
        <span
          className='absolute right-2 top-2 text-red-500 text-xl cursor-pointer'
          onClick={toggle}
        >
          &#10006;
        </span>
        <div className='row centerAll'>
          <img
            src={book?.image?.url || '/defaultBook.jpg'}
            alt='book'
            className='object-cover rounded-md shadow-lg'
            width={150}
            height={150}
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
          <BookDetailText name='availability' value={book?.totalCount} />
        </div>
      </div>
    </Popup>
  );
};

export default BookDetails;
