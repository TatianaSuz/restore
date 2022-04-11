import { VFC } from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './app.css';
import Header from '../header/header';
import ErrorBoundary from '../error-boundary/error-boundary';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const App: VFC = () => {
  return (
    <div>
      <Header numItems={2} total={23} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <ShoppingCartTable />
    </div>
  );
};

export default App;
