import React from 'react';
import css from './Paginator.module.css';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  
  return (
    <div>
      {pages.map((p) => (
        <span
          className={currentPage === p && css.selectedPage}
          onClick={() => onPageChanged(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
