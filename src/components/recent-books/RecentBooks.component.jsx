import React from 'react';
import { useQuery } from 'react-query';
import Carousel from '../shared/carousel/Carousel.component';
import BookCard from './BookCard.component';
import './recent-books.css';

const fetchBook = async () => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/book/recent`, {
    credentials: 'include',
  });
  const data = res.json();
  if (data?.status === 'error' || data?.status === 'fail') throw new Error();
  return data;
};

const RecentBooks = () => {
  const { data } = useQuery('book', fetchBook);
  return (
    <section className='py-32 space-y-20'>
      <div className='text-center'>
        <h1 className='recentHeader dark:text-white'>Recently Added Books</h1>
      </div>
      {data && <Carousel items={data} Component={BookCard} />}
    </section>
  );
};

export default RecentBooks;
