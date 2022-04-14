import React, { useEffect, VFC } from 'react';
import BookListItem, { Book } from '../book-list-item/book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import WithBookstoreService from '../hoc/with-bookstore-service';
import BookstoreService from '../../services/bookstore-service';
import { bookAddedToCart } from '../../store/actions/action-creators/app-creators';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { fetchBooks } from '../../store/actions/action-creators/async-actions';

export type Books = Book[];
type Props = {
  bookstoreService: BookstoreService;
  books: Books;
  booksLoaded: (newBooks: Books) => void;
  booksRequested: () => void;
  booksError: (error: Error) => void;
  fetchBooks: () => void;
  loading: boolean;
  error: null | Error;
  onAddedToCart: (id: number) => void;
};

const BookList: VFC<{ books: Books; onAddedToCart: (id: number) => void }> = ({
  books,
  onAddedToCart,
}) => (
  <div className="book-list">
    {books.map((book) => (
      <BookListItem key={book.id} book={book} onAddedToCart={() => onAddedToCart(book.id)} />
    ))}
  </div>
);

const BookListContainer: VFC<Props> = ({ books, fetchBooks, loading, error, onAddedToCart }) => {
  useEffect(() => fetchBooks(), []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = (state: RootState) => ({
  books: state.bookList.books,
  loading: state.bookList.loading,
  error: state.bookList.error,
});

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: Props) => ({
  fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
  onAddedToCart: (id: number) => dispatch(bookAddedToCart(id)),
});
export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
