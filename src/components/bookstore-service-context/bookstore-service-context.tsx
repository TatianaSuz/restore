import React from 'react';
import BookstoreService from '../../services/bookstore-service';

const { Provider: BookstoreServiceProvider, Consumer: BookstoreServiceConsumer } =
  React.createContext<BookstoreService | null>(null);

export { BookstoreServiceProvider, BookstoreServiceConsumer };
