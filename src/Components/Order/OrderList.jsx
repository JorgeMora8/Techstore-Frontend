import React from 'react'
import { getContext } from '../Context/AppContext'
import OrderItem from './OrderItem'
import OrderForm from './orderForm'
import EmptyCart from '../Cart/EmptyCart'

const OrderList = () => {
    const {getProductInCart, getTotalCartPrice, getTotalProductCartUnits} = getContext()
    const cart = getProductInCart()
    const totalProductPrice = getTotalCartPrice()
    const totalProductUnits = getTotalProductCartUnits()

  return (
    <div className='orderListContainer'>
    <ol className="list-group list-group-numbered">
    {cart.map((product) => <OrderItem key={product.id} data={product} />)}
    </ol>
    <div className="finalProductInfo">
      <div className="orderDetailTotalArea">
      <b className='orderDetailTotalPrice'>TOTAL: {totalProductPrice}$</b>
      <b className='orderDetailTotalProducts'>TOTAL PRODUCTS: {totalProductUnits} units</b>
      </div>
    </div>

    {cart.length != 0 ? <OrderForm /> : <EmptyCart/>}
  
    </div>
  )
}

export default OrderList