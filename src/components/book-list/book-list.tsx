import React, { useEffect, VFC } from 'react';
import BookListItem, { Book } from '../book-list-item/book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import WithBookstoreService from '../hoc/with-bookstore-service';
import BookstoreService from '../../services/bookstore-service';
import fetchBooks from '../../store/actions/action-creators/app-creators';
import compose from '../../utils/compose';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export type Books = Book[];
export type Props = {
  bookstoreService: BookstoreService;
  books: Books;
  booksLoaded: (newBooks: Books) => void;
  booksRequested: () => void;
  booksError: (error: Error) => void;
  fetchBooks: () => void;
  loading: boolean;
  error: null | Error;
};

const BookList: VFC<{ books: Books }> = ({ books }) => (
  <ul className="book-list">
    {books.map((book) => (
      <li key={book.id}>
        <BookListItem book={book} />
      </li>
    ))}
  </ul>
);

const BookListContainer: VFC<Props> = ({ books, fetchBooks, loading, error }) => {
  useEffect(() => fetchBooks(), []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return <BookList books={books} />;
};

const mapStateToProps = (state: RootState) => ({
  books: state.app.books,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: Props) => ({
  fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch),
});

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
