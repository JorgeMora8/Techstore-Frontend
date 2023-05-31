import React from 'react'

const OrderItem = ({data}) => {

    const {name, price, stock, image, items} = data
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold orderDetailProductName">{name}</div>
          <p className='orderDetailItems'>{items} units</p> 
        </div>
      <span className="badge bg-primary rounded-pill orderDetailPrice">{price} c/u</span>
    </li>

  )
}

export default OrderItem