import { VFC } from 'react';
import icon from '../../static/img/error-cat.gif';
import './error-indicator.css';

const ErrorIndicator: VFC = () => (
  <div className="error-indicator">
    <img className="error-cat" src={icon} alt="cat was here" />
    <div className="error-text">
      <h1 className="error-text-h">Ooops..</h1>
      <h2 className="error-text-h">Some server problems</h2>
      <h2 className="error-text-h">Our worker looking for a problem</h2>
    </div>
  </div>
);

export default ErrorIndicator;
