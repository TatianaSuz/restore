import { BOOKS_LOADED } from '../action-types/constants';
import { Book } from '../../../components/book-list-item/book-list-item';

const bookLoaded = (books: Book[]) =>
  ({
    type: BOOKS_LOADED,
    payload: books,
  } as const);

export default bookLoaded;
