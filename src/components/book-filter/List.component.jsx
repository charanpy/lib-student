import React from 'react';

const ListContainer = ({ children, style }) => (
  <div className='p-2' style={style}>
    <p className='text-slate-900 dark:text-slate-100 2xl:text-xl capitalize'>
      {children}
    </p>
  </div>
);

export const CategoryList = ({ index, data, style }) => {
  return <ListContainer style={style}>{data[index]}</ListContainer>;
};

export const AuthorList = ({ index, data, style }) => {
  return <ListContainer style={style}>{data[index]?.authorName}</ListContainer>;
};
