import {VFC} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import './app.css'
import Header from "../header/header";

const App: VFC = () => {
  return (
    <div className='tablet'>
      <Header/>
      <Spinner/>
      <ErrorIndicator/>
      <div>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
      </div>
      <div>
        <h2>Your Order</h2>
        <table>
          <tr>
            <td>
              <th>#</th>
            </td>
            <td>
              <th>Item</th>
            </td>
            <td>Count</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default App