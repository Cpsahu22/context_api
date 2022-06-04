import React,{useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import Cart from './Cart'

const Product = () => {
  const {isAuthorized} = useContext(AuthContext);
  return (
    <div>product:{isAuthorized ? "LoggedIn" : "LoggedOut"}
      <Cart/>
    </div>
  )
}

export default Product