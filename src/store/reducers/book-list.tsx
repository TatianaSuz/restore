import {
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from '../actions/action-types/constants';
import { HandleReducerPart } from './app';

const updateBookList: HandleReducerPart<'bookList'> = (state, action) => {
  if (action.type === FETCH_BOOK_REQUEST) {
    return { books: [], loading: true, error: null };
  }
  if (action.type === FETCH_BOOKS_SUCCESS) {
    return { books: action.payload, loading: false, error: null };
  }
  if (action.type === FETCH_BOOK_FAILURE) {
    return { books: [], loading: false, error: action.payload };
  }
  return state.bookList;
};

export default updateBookList;
