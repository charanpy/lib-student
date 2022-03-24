import React from 'react';
import { darkInputCls } from '../login/Login.component';
import Button from '../shared/button/Button.component';
import SearchSVG from '../shared/svg/Search.svg';
import '../book-filter/book-fiter.css';

const AuthorInput = ({ setAuthor, handleSubmit }) => {
  return (
    <section className='cardInputWrapper space-y-6 dark:bg-[#0A121A] bookFilterContainer items-center py-8'>
      <input
        className={`authInput ${darkInputCls}`}
        type='text'
        placeholder='Enter Author Name'
        onChange={(e) => setAuthor(e?.target?.value)}
      />
      <Button className='cardSearchBtn row centerAll' onClick={handleSubmit}>
        <SearchSVG />
        Search
      </Button>
    </section>
  );
};

export default AuthorInput;
