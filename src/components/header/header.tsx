import {VFC} from "react";
import './header.css'

const Header: VFC = () => {
  return (
    <div className='header'>
      <h1 className='site-name'>ReStore</h1>
      <h2 className='baskets'>Корзина</h2>
    </div>
  )
}
export default Header