import { Book } from '../../components/book-list-item/book-list-item';
import {
  FETCH_BOOK_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_FAILURE,
} from '../actions/action-types/constants';

type BooksLoadedAction = { type: 'FETCH_BOOKS_SUCCESS'; payload: Book[] };
type BooksRequestedAction = { type: 'FETCH_BOOK_REQUEST' };
type BooksErrorAction = { type: 'FETCH_BOOK_FAILURE'; payload: Error };
type Action = BooksLoadedAction | BooksRequestedAction | BooksErrorAction;

export type AppState = {
  books: Book[];
  loading: boolean;
  error: null | Error;
};

const initialState: AppState = {
  books: [],
  loading: true,
  error: null,
};

const appReducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return { books: [], loading: true, error: null };
    case FETCH_BOOKS_SUCCESS:
      return { books: action.payload, loading: false, error: null };
    case FETCH_BOOK_FAILURE:
      return { books: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export default appReducer;
