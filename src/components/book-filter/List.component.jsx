import React from 'react';

const ListContainer = ({ children, style }) => (
  <div className='p-2' style={style}>
    <p className='text-slate-900 dark:text-slate-100 2xl:text-xl capitalize'>
      {children}
    </p>
  </div>
);

export const CategoryList = ({ index, data: { data, handleClick }, style }) => {
  console.log(data[index]);
  return (
    <div onClick={() => handleClick(data[index])}>
      <ListContainer style={style}>{data[index]}</ListContainer>
    </div>
  );
};

export const AuthorList = ({ index, data: { data, handleClick }, style }) => {
  console.log(data[index]?.authorName);

  return (
    <div
      onClick={() =>
        handleClick((prev) => ({
          ...prev,
          id: data[index]?._id,
          name: data[index]?.authorName,
        }))
      }
    >
      <ListContainer style={style}>{data[index]?.authorName}</ListContainer>
    </div>
  );
};
