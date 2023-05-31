import React, { useState } from 'react'
import ItemCount from '../../Count/ItemCount'
import { getContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

  const {image, name, price, description, category, units} = data
  const [count, setCount] = useState(1)
  const [finish, setFinish] = useState(false)
  const {addProductInCart} = getContext()

  function onAdd(){ 
    setCount(count + 1)
  }

  function onRemove(){ 
    if(count >= 2) setCount(count - 1)
  }

  function onSave(){ 
    addProductInCart({...data, items:count})
    setFinish(true)
  }


  return (
    <div className='itemDetailContainer'>
       <div className="itemDetailInfo">
        <div className="imageDetailArea">
          <img className='productImageDetail' src={image} alt="" />
        </div>
        <div className="itemDetailTextArea">
          <span className='productDetailCategory'>{category}</span>
          <b className='productDetailName'>{name}</b>
          <p className='productDetailDescription'>{description}</p>
          <b className="productDetailUnits">{units} units avaliable</b>
          <b className='productDetailPrice'>{price}$</b>

          {finish ?
            <>
            <button className='goToCartBtnDetail'><Link to="/cart">Go cart</Link></button>
            <button className='goToProductListBtnDetail'><Link to="/">Go shopping</Link></button>
            </>
           : 
           <ItemCount onAdd={onAdd} onRemove={onRemove} onSave={onSave} count={count} /> }


        </div>
       </div>
    </div>

  )
}

export default ItemDetail