import React from 'react';
import BookListItem, { Book } from '../book-list-item/book-list-item';
import './book-list.css';

export type Books = Book[];

const BookList = (books: Books) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookListItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
