import * as React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => (
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
      <tbody>
        <tr>
          <td className="item-number">1</td>
          <td>Cool Book</td>
          <td className="table-count">2</td>
          <td className="table-price">$32</td>
          <td className="action-buttons">
            <button type="button">
              <i className="fa fa-plus-circle" />
            </button>
            <button type="button">
              <i className="fa fa-minus-circle" />
            </button>
            <button type="button">
              <i className="fa fa-times-circle" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="total">Total $32 </div>
  </div>
);

export default ShoppingCartTable;
