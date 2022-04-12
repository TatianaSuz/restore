import { VFC } from 'react';
import BookList from '../book-list/book-list';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage: VFC = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
