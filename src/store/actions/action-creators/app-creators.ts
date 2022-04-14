import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_FAILURE,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_FROM_CART,
} from '../action-types/constants';
import { Book } from '../../../components/book-list-item/book-list-item';

export const booksLoaded = (books: Book[]) =>
  ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  } as const);

export const booksRequested = () =>
  ({
    type: FETCH_BOOK_REQUEST,
  } as const);

export const booksError = (error: Error) =>
  ({
    type: FETCH_BOOK_FAILURE,
    payload: error,
  } as const);

export const bookAddedToCart = (bookId: number) =>
  ({
    type: BOOK_ADDED_TO_CART,
    payload: bookId,
  } as const);

export const bookRemovedFromCart = (bookId: number) =>
  ({
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId,
  } as const);

export const allBookRemovedFromCart = (bookId: number) =>
  ({
    type: ALL_BOOKS_REMOVED_FROM_CART,
    payload: bookId,
  } as const);
