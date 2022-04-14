import * as React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';
import { RootState } from '../../store/store';
import { VFC } from 'react';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBookRemovedFromCart,
} from '../../store/actions/action-creators/app-creators';

export type Item = {
  id: number;
  title: string;
  count: number;
  total: number;
};

type Props = {
  items: Item[];
  total: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
};

const ShoppingCartTable: VFC<Props> = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item: Item, idx: number) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td className="item-number">{idx + 1}</td>
        <td>{title}</td>
        <td className="table-count">{count}</td>
        <td className="table-price">${total}</td>
        <td className="action-buttons">
          <button type="button" onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button type="button" onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          <button type="button" onClick={() => onDelete(id)}>
            <i className="fa fa-times-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th className="table-item">Item</th>
            <th className="table-count">Count</th>
            <th className="table-price">Price</th>
            <th className="table-action">Action </th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total ${total} </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  items: state.shoppingList.cartItems,
  total: state.shoppingList.orderTotal,
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
