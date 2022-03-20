import React from 'react';
import Loader from './Loader.component';

const FullPageLoader = () => {
  return (
    <div className='fixed h-full w-full top-0 left-0 flex flex-col centerAll bg-[#212529] space-y-4'>
      <Loader />
      <h1 className='text-white text-xl'>Loading...</h1>
    </div>
  );
};

export default FullPageLoader;
