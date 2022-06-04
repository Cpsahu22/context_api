import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CArtContext'

const Wishlist = () => {
  const {count} = useContext(CartContext)

  return (
    <div>Wishlist : {count}</div>
  )
}

export default Wishlist