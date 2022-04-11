// ActionTypes

import { AppActionTypes } from '../actions/action-types/action-types';
import { Book } from '../../components/book-list-item/book-list-item';

type BooksLoadedAction = { type: 'BOOKS_LOADED'; payload: Book[] };
type Action = BooksLoadedAction;

type State = {
  books: Book[];
};

const initialState: State = {
  books: [],
};

const appReducer = (state: State = initialState, action: AppActionTypes): State => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default appReducer;
