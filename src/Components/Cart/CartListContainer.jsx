import React from 'react'
import CartList from './CartList'

const CartListContainer = () => {
  return (
    <>
    <div>
      <div className="cartListTextContainer">
        <div className="textArea">
          <h1 className='textAreaCartTitle'>Cart</h1>
          <p className='textAreaCartText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eveniet amet asperiores error eum labore.</p>
        </div>
      </div>
    </div>
    <CartList />
    </>
  )
}

export default CartListContainer