// ActionTypes

import { AppActionTypes } from '../actions/action-types/action-types';
import { Book } from '../../components/book-list-item/book-list-item';

export type AppState = {
  books: Book[];
};

const initialState: AppState = {
  books: [],
};

const appReducer = (state: AppState = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default appReducer;
