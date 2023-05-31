import React, { useEffect } from 'react'

import CartItem from './CartItem'
import { getContext } from '../Context/AppContext'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'

const CartList = () => {
  
  const {getProductInCart, clearCart, getTotalCartPrice, getTotalProductCartUnits} = getContext()
  const cart = getProductInCart()

  function emptyCart(){ 
    clearCart()
  }

  const totalProductPrice = getTotalCartPrice()
  const totalProductUnits = getTotalProductCartUnits()

  return (
    <>
    <div className="productCartList">
    {cart.map((product) => <CartItem key={product.id} item={product}/>)}
    </div>
    <div className="cartInfo">
      <div className="cartInfoTextArea">
        <b className='totalPriceCart'><span>total:</span> {totalProductPrice}$</b>
        <b className='totalProductCart'><span>Total products:</span>{totalProductUnits}</b>
      </div>
    </div>
    <div className="btnCartContainer">
      <button className='emptyCarDetailtBtn'onClick={emptyCart} >Empty cart</button>
    <button className='finishOrderBtn'><Link to="/order">finish order</Link></button> 

    </div>
    </>
  )
}

export default CartList