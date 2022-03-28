import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button.component';

const LinkCard = ({ item }) => {
  return (
    <Link to={item.path}>
      <Button className='bg-[#212529] px-4 py-1 rounded-md text-white 2xl:text-xl dark:bg-[#0A121A]'>
        {item.name}
      </Button>
    </Link>
  );
};

export default LinkCard;
