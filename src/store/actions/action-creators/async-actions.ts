import BookstoreService from '../../../services/bookstore-service';
import { AppDispatch } from '../../store';
import { Books } from '../../../components/book-list/book-list';
import { booksError, booksLoaded, booksRequested } from './app-creators';

export const fetchBooks =
  (bookstoreService: BookstoreService, dispatch: AppDispatch) => (): void => {
    dispatch(booksRequested());
    bookstoreService
      .getBooks()
      .then((data: Books) => {
        dispatch(booksLoaded(data));
      })
      .catch((err: Error) => dispatch(booksError(err)));
  };
