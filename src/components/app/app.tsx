import { VFC } from 'react';
import './app.css';
import Header from '../header/header';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';

const App: VFC = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </div>
);

export default App;
