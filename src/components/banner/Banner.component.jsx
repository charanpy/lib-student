import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';
import './banner.css';

const Banner = () => {
  const { user } = useAuth();
  return (
    <div className='mainContainer banner row dark:bg-[#0E1924]'>
      <section className='bannerHeader'>
        <h1 className='text-3xl text-slate-900 font-normal dark:text-white'>
          E-Library Student Panel
        </h1>
        <p className='text-slate-600 leading-8 dark:text-slate-400 lg:w-2/3'>
          Access library materials, reference notes, books, recently uploaded
          books, popular books, key announcements, renewed book history, key
          notifications and much more at your own place.
        </p>
        <div className='row bannerBtn'>
          <Link to={user ? '/dashboard' : '/login'}>
            <button className='bannerMainBtn hover:bg-blue-800'>
              {user ? 'Dashboard' : 'Login'}
            </button>
          </Link>
          {user && (
            <Link to='/materials'>
              <button className='bannerSubBtn hover:bg-blue-700 hover:text-white'>
                Materials
              </button>
            </Link>
          )}
        </div>
      </section>
      <section className='w-full lg:w-1/2 row justify-center items-center'>
        <div className='h-[375px] w-[500px]'>
          <img
            src='/blogging.png'
            alt='banner'
            width='100%'
            height='100%'
            loading='lazy'
            className='my-8 md:my-0'
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
