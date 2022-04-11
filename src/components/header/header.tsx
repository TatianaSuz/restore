import { VFC } from 'react';
import './header.css';
import icon from '../../static/img/premium-icon-baskets-2404124.png';

type Props = { numItems: number; total: number };

const Header: VFC<Props> = ({ numItems, total }) => {
  return (
    <div className="header">
      <a href="#" className="site-name">
        ReStore
      </a>
      <div className="image-wrap">
        <img src={icon} className="basket" alt="basket" />
      </div>
      {numItems} items ${total}
    </div>
  );
};
export default Header;
