import React from 'react'

const FinishOrderItem = ({data}) => {

    const {name, price, items, image} = data
  return (
    
    <div className="orderProductItem">
    <div className="orderProductItemImageArea">
        <img src={image} style={{width:"20px"}} alt="" />
    </div>
    <b className='orderProductItemName'>Samsung S22</b>
    <b className='orderProductItemPrice'>500 c/u</b>
    <b className='orderProductItemUnits'>3 units</b>
</div>
  )
}

export default FinishOrderItem