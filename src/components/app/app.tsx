import { VFC } from 'react';
import './app.css';
import Header from '../header/header';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

const App: VFC = () => (
  <div>
    <Header numItems={2} total={23} />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </div>
);

export default App;
