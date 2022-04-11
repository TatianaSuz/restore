import React from 'react';

const { Provider: BookstoreServiceProvider, Consumer: BookstoreServiceConsumer } =
  React.createContext<Function | null>(null);

export { BookstoreServiceProvider, BookstoreServiceConsumer };
