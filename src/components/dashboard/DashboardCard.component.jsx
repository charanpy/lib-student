import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button.component';
import Loader from '../shared/loader/Loader.component';
import './dashboard.css';

const DashboardCard = ({ className, Icon, count, header, isLoading, path }) => {
  return (
    <Button>
      <Link to={path}>
        <section className={`dashboardCard ${className}`}>
          <Icon className='fill-white dark:fill-white h-[30px]' />
          <h1 className='text-white text-xl 2xl:text-2xl'>{header}</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <p className='text-white font-bold text-2xl text-white'>{count}</p>
          )}
          <p className='bg-white rounded-full py-1 px-4 text-black'>View</p>
        </section>
      </Link>
    </Button>
  );
};

export default DashboardCard;
