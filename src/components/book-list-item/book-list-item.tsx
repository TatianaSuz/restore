import React, { VFC } from 'react';
import './book-list-item.css';

export type Book = { id: number; title: string; author: string; price: number; coverImage: string };
type Props = { book: Book; onAddedToCart: (id: number) => void };

const BookListItem: VFC<Props> = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage, id } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="Book cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          type="button"
          className="btn-add-to-cart"
          onClick={() => {
            onAddedToCart(id);
          }}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
