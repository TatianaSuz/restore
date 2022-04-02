import {VFC} from "react";
import icon from '../../static/img/error-cat.gif'
import './error-indicator.css'

const ErrorIndicator: VFC = () => {
  return(
    <div>
      <img className='error-cat' src={icon} alt="cat was here"/>
      <span>We have a problem</span>
      <span>Someone dropped the server</span>
    </div>
  )
}

export default ErrorIndicator