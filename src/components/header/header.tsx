import { VFC } from 'react';
import './header.css';
import icon from '../../static/img/premium-icon-baskets-2404124.png';
import { Link } from 'react-router-dom';

type Props = { numItems: number; total: number };

const Header: VFC<Props> = ({ numItems, total }) => {
  return (
    <div className="header">
      <Link to="/" className="site-name">
        <div className="site-name">ReStore</div>
      </Link>
      <Link to="/cart" className="basket-cart">
        <img src={icon} className="basket" alt="basket" />
        <span className="basket-info">
          {numItems} items ${total}
        </span>
      </Link>
    </div>
  );
};
export default Header;
