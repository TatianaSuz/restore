import { VFC } from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './app.css';
import Header from '../header/header';
import ErrorBoundary from '../error-boundary/error-boundary';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

const App: VFC = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
