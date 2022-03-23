import React from 'react';
import { darkInputCls } from '../login/Login.component';
import Button from '../shared/button/Button.component';
import SearchSVG from '../shared/svg/Search.svg';
import '../book-filter/book-fiter.css';

const AuthorInput = () => {
  return (
    <section className='cardInputWrapper space-y-6 dark:bg-[#0A121A] bookFilterContainer items-center py-8'>
      <input
        className={`authInput ${darkInputCls}`}
        type='text'
        placeholder='Enter Author Name'
      />
      <Button className='cardSearchBtn row centerAll'>
        <SearchSVG />
        Search
      </Button>
    </section>
  );
};

export default AuthorInput;
