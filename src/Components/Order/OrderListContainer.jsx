import React from 'react'
import OrderList from './OrderList'

const OrderListContainer = () => {

  return (
    <>
    <div className='orderInfoContainer'>
        <div className="orderTextArea">
            <h1 className='orderTextTitle'>Order Info</h1>
            <p className='orderTextParagraph'>Here itll show all the products added, prices and total price to cancel all this products</p>
        </div>
    </div>
    <OrderList />
    </>
  )
}

export default OrderListContainer