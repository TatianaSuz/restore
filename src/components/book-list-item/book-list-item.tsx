import React, { Fragment } from 'react';
import './book-list-item.css';

export type Book = { id: number; title: string; author: string };

const BookListItem = (book: Book) => {
  const { title, author } = book;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
};

export default BookListItem;
