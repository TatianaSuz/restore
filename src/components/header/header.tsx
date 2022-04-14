import { VFC } from 'react';
import './header.css';
import icon from '../../static/img/premium-icon-baskets-2404124.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../store/store';

type Props = { numItems: number; total: number };

const Header: VFC<Props> = ({ numItems, total }) => (
  <div className="header">
    <Link to="/" className="site-name">
      <div className="site-name">ReStore</div>
    </Link>
    <div className="basket-cart">
      <img src={icon} className="basket" alt="basket" />
      <span className="basket-info">
        {numItems} items ${total}
      </span>
    </div>
  </div>
);

const mapStateToProps = (state: RootState) => {
  const items: number[] = state.shoppingList.cartItems.map((item) => item.count);
  const numItems = items.length ? items.reduce((a, v) => a + v, 0) : 0;
  return {
    total: state.shoppingList.orderTotal,
    numItems,
  };
};
export default connect(mapStateToProps)(Header);
