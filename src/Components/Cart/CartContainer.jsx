import React from 'react'
import CartList from './CartList'
import { getContext } from '../Context/AppContext'
import EmptyCart from './EmptyCart'

const CartContainer = () => {

  const {getProductInCart} = getContext()
  const cart = getProductInCart()

  return (
    <div>

      <div className="cartHeaderContainer">
        <div className="cartInfoTextArea">
          <img className="cartInfoLogo" src="../techstorelogoBlack.png" alt="" />
          <h1 className='cartInfoTextTitle'>Cart Info</h1>
          <p className='cartInfoHeaderTextparagraph'>On this page, it will be reflected all the products saved i your cart</p>
        </div>
      
      </div>
        <>
            {cart.length == 0 ? <EmptyCart /> : <CartList />}
        </>
    </div>
  )
}

export default CartContainer