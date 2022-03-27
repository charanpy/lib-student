import React from 'react';
import ToggleTheme from '../../layouts/header/ToggleTheme';
import { darkInputCls } from '../login/Login.component';
import ProfileBooks from './ProfileBooks.component';

const ProfileComponent = ({ user }) => {
  return (
    <div className='space-y-4 flex flex-col items-center px-1'>
      <img
        src={user?.image?.url || '/user.png'}
        width='250px'
        height='250px'
        alt='profile'
        className='object-cover'
      />
      <div className='cursor-pointer py-2'>
        <ToggleTheme />
      </div>
      <p className={`authInput ${darkInputCls}`}>
        <span className='text-green-500 font-bold'>Name</span>: {user?.name}
      </p>
      <p className={`authInput ${darkInputCls}`}>
        <span className='text-green-500 font-bold'>RollNumber</span>:{' '}
        {user?.rollNumber}
      </p>
      <p className={`authInput ${darkInputCls}`}>
        <span className='text-green-500 font-bold'>Email</span>: {user?.email}
      </p>
      <p className={`authInput ${darkInputCls}`}>
        <span className='text-green-500 font-bold'>DOB</span>: {user?.dob}
      </p>
      <p className={`authInput ${darkInputCls}`}>
        <span className='text-green-500 font-bold'>MobileNumber</span>:{' '}
        {user?.mobileNumber}
      </p>
      <p className={`authInput ${darkInputCls} capitalize`}>
        <span className='text-green-500 font-bold'>Year</span>: {user?.year}
      </p>
      <ProfileBooks />
    </div>
  );
};

export default ProfileComponent;
