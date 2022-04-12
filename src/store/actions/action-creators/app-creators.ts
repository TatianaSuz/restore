import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_FAILURE,
} from '../action-types/constants';
import { Book } from '../../../components/book-list-item/book-list-item';
import { AppDispatch } from '../../store';
import { Books } from '../../../components/book-list/book-list';
import BookstoreService from '../../../services/bookstore-service';

const booksLoaded = (books: Book[]) =>
  ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  } as const);

const booksRequested = () =>
  ({
    type: FETCH_BOOK_REQUEST,
  } as const);

const booksError = (error: Error) =>
  ({
    type: FETCH_BOOK_FAILURE,
    payload: error,
  } as const);

const fetchBooks = (bookstoreService: BookstoreService, dispatch: AppDispatch) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data: Books) => {
      dispatch(booksLoaded(data));
    })
    .catch((err: Error) => dispatch(booksError(err)));
};

export default fetchBooks;
