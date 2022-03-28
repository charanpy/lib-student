import React from 'react';
import { useQuery } from 'react-query';
import ApiRequest from '../../lib/ApiRequest';
import DashboardCard from './DashboardCard.component';
import Books from '../shared/svg/Books.svg';
import ReturnSVG from '../shared/svg/Return.svg';
import PendingSVG from '../shared/svg/Pending.svg';

const fetchDashboardData = () =>
  new ApiRequest('/book/dashboard', 'GET', null, null, true).request();

const Dashboard = () => {
  const { data, isLoading } = useQuery('dashboard', fetchDashboardData);
  return (
    <>
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center md:justify-between px-2'>
        <DashboardCard
          className='bg-[#2D33B3]'
          Icon={Books}
          header='Books'
          count={data?.[0] || 0}
          isLoading={isLoading}
          path='/books'
        />
        <DashboardCard
          className='bg-green-500'
          Icon={ReturnSVG}
          header='Returned Books'
          count={data?.[1] || 0}
          isLoading={isLoading}
          path='/return-book'
        />
        <DashboardCard
          className='bg-red-500'
          Icon={PendingSVG}
          header='Pending'
          path='/issue-book'
          count={data?.[2] || 0}
          isLoading={isLoading}
          onClick={fetch}
        />
      </div>
    </>
  );
};

export default Dashboard;
