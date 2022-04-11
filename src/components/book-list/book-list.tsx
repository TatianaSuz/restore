import React, { useEffect, VFC } from 'react';
import BookListItem, { Book } from '../book-list-item/book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import WithBookstoreService from '../hoc/with-bookstore-service';
import BookstoreService from '../../services/bookstore-service';
import bookLoaded from '../../store/actions/action-creators/app-creators';
import compose from '../../utils/compose';

export type Books = Book[];
type Props = {
  bookstoreService: BookstoreService;
  books: Books;
  booksLoaded: (newBooks: Books) => void;
};

const BookList: VFC<Props> = ({ bookstoreService, books, booksLoaded }) => {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, []);

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookListItem book={book} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  books: state.app.books,
});

const mapDispatchToProps = (dispatch: AppDispatch) =>
  ({
    booksLoaded: (newBooks: Books): void => {
      dispatch(bookLoaded(newBooks));
    },
  } as const);

export default compose(
  WithBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
