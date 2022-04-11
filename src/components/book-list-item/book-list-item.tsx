import React, { VFC } from 'react';
import './book-list-item.css';

export type Book = { id: number; title: string; author: string; price: number; coverImage: string };
type Props = { book: Book };

const BookListItem: VFC<Props> = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="Book cover" />
      </div>
      <div className="book-details">
        <a className="book-title" href="#">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button type="button" className="btn-add-to-cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
