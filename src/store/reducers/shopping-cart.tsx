import { Item } from '../../components/shopping-cart-table/shopping-cart-table';
import { Book } from '../../components/book-list-item/book-list-item';
import {
  ALL_BOOKS_REMOVED_FROM_CART,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
} from '../actions/action-types/constants';
import { AppState, HandleReducerPart } from './app';
import { AppActionTypes } from '../actions/action-types/action-types';

const updateCartItems = (cartItems: Item[], item: Item, idx: number) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book: Book, item: Item | undefined, quantity: number): Item => {
  const innerItem = item ?? { id: book.id, count: 0, title: book.title, total: 0 };
  const { id, count, title, total } = innerItem;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (
  state: AppState,
  bookId: number,
  quantity: number,
  actionType: AppActionTypes['type'],
): AppState['shoppingList'] => {
  const {
    bookList: { books },
    shoppingList: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  let orderTotal = 0;

  if (book !== undefined) {
    const newItem = updateCartItem(book, item, quantity);
    if (actionType === BOOK_ADDED_TO_CART) {
      orderTotal = state.shoppingList.orderTotal + book.price;
    }
    if (actionType === BOOK_REMOVED_FROM_CART) {
      orderTotal = state.shoppingList.orderTotal - book.price;
    }
    if (actionType === ALL_BOOKS_REMOVED_FROM_CART) {
      orderTotal = state.shoppingList.orderTotal - item.total;
    }
    return {
      ...state.shoppingList,
      orderTotal,
      cartItems: updateCartItems(cartItems, newItem, itemIndex),
    };
  }
  return state.shoppingList;
};

const updateShoppingList: HandleReducerPart<'shoppingList'> = (state, action) => {
  if (action.type === BOOK_ADDED_TO_CART) {
    return updateOrder(state, action.payload, 1, action.type);
  }
  if (action.type === BOOK_REMOVED_FROM_CART) {
    return updateOrder(state, action.payload, -1, action.type);
  }
  if (action.type === ALL_BOOKS_REMOVED_FROM_CART) {
    const item = state.shoppingList.cartItems.find(({ id }) => id === action.payload);
    if (item) {
      return updateOrder(state, action.payload, -item.count, action.type);
    }
  }
  return state.shoppingList;
};

export default updateShoppingList;
