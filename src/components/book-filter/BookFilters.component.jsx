import React, { memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { darkInputCls } from '../login/Login.component';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import { AuthorList, CategoryList } from './List.component';
import './book-fiter.css';

const SearchInput = memo(({ data, placeholder, Component, handleChange }) => {
  return (
    <div
      tabIndex={0}
      className={`author authInput ${darkInputCls} row listBox`}
      placeholder='Select Author'
    >
      <p className='2xl:text-lg text-slate-400'>{placeholder}</p>
      <div>
        <DownArrowSVG />
      </div>
      <div className='author-list dark:bg-slate-800'>
        <List
          height={150}
          width={250}
          itemCount={data?.length || 0}
          itemData={{ data, handleClick: handleChange }}
          itemSize={50}
          useIsScrolling
        >
          {Component}
        </List>
      </div>
    </div>
  );
});

const BooksFilter = ({
  categories,
  authors,
  category,
  author,
  setCategory,
  setAuthor,
  setTitle,
}) => {
  return (
    <section className='cardInputWrapper dark:bg-[#0A121A] bookFilterContainer'>
      <div className='row justify-between'>
        <SearchInput
          data={categories}
          Component={CategoryList}
          handleChange={setCategory}
          placeholder={category || 'Select Category'}
        />
        <SearchInput
          data={authors}
          placeholder={author?.name || 'Select Author'}
          Component={AuthorList}
          handleChange={setAuthor}
        />
        <input
          type='text'
          placeholder='Book Title'
          className={`authInput ${darkInputCls} my-6 author`}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </section>
  );
};

export default BooksFilter;
