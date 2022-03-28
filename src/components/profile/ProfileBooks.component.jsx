import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ApiRequest from '../../lib/ApiRequest';
import { darkInputCls } from '../login/Login.component';
import Loader from '../shared/loader/Loader.component';

const fetchDashboardData = () =>
  new ApiRequest('/book/dashboard', 'GET', null, null, true).request();

const ProfileBooks = () => {
  const { data, isLoading } = useQuery('dashboard', fetchDashboardData);
  if (isLoading) return <Loader />;
  return (
    <>
      <div
        className={`authInput ${darkInputCls} row justify-between items-center`}
      >
        <p>
          <span className='text-green-500 font-bold'>Books</span>:{' '}
          {data?.[0] || 0}
        </p>
        <Link to='/books'>
          <img src='/launch.svg' alt='visit' style={{ height: '18px' }} />
        </Link>
      </div>
      <div
        className={`authInput ${darkInputCls} row justify-between items-center`}
      >
        <p>
          <span className='text-green-500 font-bold'>Returned Books</span>:{' '}
          {data?.[1] || 0}
        </p>
        <Link to='/return-book'>
          <img src='/launch.svg' alt='visit' style={{ height: '18px' }} />
        </Link>
      </div>
      <div
        className={`authInput ${darkInputCls} row justify-between items-center`}
      >
        <p>
          <span className='text-green-500 font-bold'>Issued Books</span>:{' '}
          {data?.[2] || 0}
        </p>
        <Link to='/issue-book'>
          <img src='/launch.svg' alt='visit' style={{ height: '18px' }} />
        </Link>
      </div>
    </>
  );
};

export default ProfileBooks;
