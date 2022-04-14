import { Book } from '../../components/book-list-item/book-list-item';
import { Item } from '../../components/shopping-cart-table/shopping-cart-table';
import { AppActionTypes } from '../actions/action-types/action-types';
import updateShoppingList from './shopping-cart';
import updateBookList from './book-list';
import { Reducer } from 'redux';

export type AppState = {
  bookList: {
    books: Book[];
    loading: boolean;
    error: null | Error;
  };
  shoppingList: { cartItems: Item[]; orderTotal: number };
};

const initialState: AppState = {
  bookList: {
    books: [],
    loading: true,
    error: null,
  },
  shoppingList: {
    cartItems: [],
    orderTotal: 0,
  },
};

type AppReducer = Reducer<AppState, AppActionTypes>;

export type HandleReducerPart<T extends keyof AppState> = (
  state: AppState,
  action: AppActionTypes,
) => AppState[T];

const appReducer: AppReducer = (state = initialState, action) => ({
  bookList: updateBookList(state, action),
  shoppingList: updateShoppingList(state, action),
});

export default appReducer;
