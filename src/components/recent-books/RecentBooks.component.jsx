import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import Carousel from '../shared/carousel/Carousel.component';
import BookCard from './BookCard.component';
import './recent-books.css';

const fetchBook = () =>
  new ApiRequest('/book/recent', 'GET', null, false).request();

const RecentBooks = () => {
  const { data } = useQuery('book', fetchBook);
  console.log(data);
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
