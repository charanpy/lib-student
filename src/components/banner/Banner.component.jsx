import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';
import './banner.css';

const Banner = () => {
  const { user } = useAuth();
  return (
    <div className='mainContainer py-32 lg:py-0 md:justify-between px-5 md:px-20 justify-center items-center row dark:bg-[#0E1924]'>
      <section className='space-y-8 w-full lg:w-1/2 text-center lg:text-left'>
        <h1 className='text-3xl text-slate-900 font-normal dark:text-white 2xl:text-4xl leading-10'>
          E-Library Student Panel
        </h1>
        <p className='text-slate-600 leading-8 dark:text-slate-400 lg:w-2/3 2xl:text-xl 2xl:leading-10'>
          Access library materials, reference notes, books, recently uploaded
          books, popular books, key announcements, renewed book history, key
          notifications and much more at your own place.
        </p>
        <div className='row md:space-x-6 justify-center lg:justify-start'>
          <Link to={user ? '/dashboard' : '/login'}>
            <button className='drop-shadow-2xl p-2 rounded-full w-[150px] bg-blue-700 text-white  mr-4 md:mr-0 mb-2 hover:bg-blue-800 2xl:text-lg'>
              {user ? 'Dashboard' : 'Login'}
            </button>
          </Link>
          {user && (
            <Link to='/materials'>
              <button className='drop-shadow-2xl p-2 dark:text-white border border-blue-700 rounded-full w-[150px] text-slate-900 mb-2 hover:bg-blue-700 hover:text-white 2xl:text-lg'>
                Materials
              </button>
            </Link>
          )}
        </div>
      </section>
      <section className='w-full lg:w-1/2 row justify-center items-center'>
        <div className='h-[300px] w-[350px] md:h-[375px] md:w-[500px]'>
          <img
            src='/blogging2.png'
            alt='banner'
            width='100%'
            height='100%'
            className='my-8 md:my-0'
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
