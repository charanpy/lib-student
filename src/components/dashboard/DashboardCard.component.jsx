import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button.component';
import './dashboard.css';

const DashboardCard = ({ className, Icon, count, header, isLoading, path }) => {
  return (
    <Button className='mb-4'>
      <Link to={path}>
        <section
          className={`items-center w-[360px] lg:w-[360px] h-[190px] mt-[27px] lg:mt-[36px] pb-6 flex flex-col py-4 justify-center rounded-lg items-center space-y-2.5 ${className} mr-4 dashboardCard`}
        >
          <Icon className='fill-white dark:fill-white h-[30px]' />
          <h1 className='text-white text-xl 2xl:text-2xl'>{header}</h1>
          {isLoading ? (
            <p className='text-white'>Loading ...</p>
          ) : (
            count && (
              <p className='text-white font-bold text-2xl text-white'>
                {count}
              </p>
            )
          )}
          <p className='bg-white rounded-full py-1 px-4 text-black'>View</p>
        </section>
      </Link>
    </Button>
  );
};

export default DashboardCard;
