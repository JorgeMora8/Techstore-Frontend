import React from 'react'
import { getContext } from '../Context/AppContext'

const CartItem = ({item}) => {

  const {removeProductInCart} = getContext()

  return (
    <div className="itemCartContainer">
      <img src={item.image} style={{"width":"60px", "margin":"0px 1rem"}} alt="" /> 
      <div>
      <b className="productCartName">{item.name}</b>
     <b className='productCartPrice'>{item.items} x {item.price}$</b>
      </div>
      <button className='btnDeleteProductInCart' onClick={()=> removeProductInCart(item.id)}>delete</button>  
    </div>
  )
}

export default CartItem