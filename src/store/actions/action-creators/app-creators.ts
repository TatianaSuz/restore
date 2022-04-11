import { BOOKS_LOADED } from '../action-types/constants';

const bookLoaded = (books: string[]) =>
  ({
    type: BOOKS_LOADED,
    payload: books,
  } as const);

export default bookLoaded;
