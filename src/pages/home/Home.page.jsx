import React from 'react';
import Banner from '../../components/banner/Banner.component';
import RecentBooks from '../../components/recent-books/RecentBooks.component';
import Showcase from '../../components/showcase/Showcase.component';

const Home = () => {
  return (
    <>
      <Banner />
      <div className='px-5 md:px-20'>
        <Showcase />
        <RecentBooks />
      </div>
    </>
  );
};

export default Home;
