import React from 'react'
import { getContext } from '../Context/AppContext'
import { Link } from 'react-router-dom'

const CartBtnNavbar = () => {

    const {getProductInCart} = getContext()
    const cart = getProductInCart()

  return(
     <>
        {cart.length == 0 ? <Link to="/cart"><img src="../cartIcon.png" style={{width:"30px"}} alt="" /></Link> : 
        <span className='navBarItemsCart'><Link to="/cart"><img src="../cartIcon.png" style={{width:"30px"}} alt="" /><span>{cart.length}</span></Link></span>
             }
    </> 
  )
}

export default CartBtnNavbar