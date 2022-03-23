import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { darkInputCls } from '../login/Login.component';
import Button from '../shared/button/Button.component';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import SearchSVG from '../shared/svg/Search.svg';
import './book-fiter.css';
import { AuthorList, CategoryList } from './List.component';

const SearchInput = ({ data, placeholder, Component }) => {
  return (
    <div
      tabIndex={0}
      className={`author authInput ${darkInputCls} row listBox`}
      placeholder='Select Author'
    >
      <p className='2xl:text-lg text-slate-400'>Select {placeholder}</p>
      <div>
        <DownArrowSVG />
      </div>
      <div className='author-list dark:bg-slate-800'>
        <List
          height={150}
          width={250}
          itemCount={data?.length || 0}
          itemData={data}
          itemSize={50}
          useIsScrolling
        >
          {Component}
        </List>
      </div>
    </div>
  );
};

const BooksFilter = ({ categories, authors }) => {
  return (
    <section className='cardInputWrapper dark:bg-[#0A121A] bookFilterContainer'>
      <div className='row justify-between'>
        <SearchInput
          data={categories}
          placeholder='Categories'
          Component={CategoryList}
        />
        <SearchInput
          data={authors}
          placeholder='Books'
          Component={AuthorList}
        />
        <input
          type='text'
          placeholder='Book Title'
          className={`authInput ${darkInputCls} my-6 author`}
        />
      </div>
      <div className='row centerAll pb-4'>
        <Button className='row centerAll cardSearchBtn'>
          <SearchSVG />
          <span>Search</span>
        </Button>
      </div>
    </section>
  );
};

export default BooksFilter;
