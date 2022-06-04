import React, { useContext } from 'react'
import { CartContext } from '../context/CArtContext'

const Cart = () => {
  const {addtocart} = useContext(CartContext)
  return (
    <div>Cart
    <button onClick={addtocart}>add to Cart</button>
    </div>
  )
}

export default Cart
