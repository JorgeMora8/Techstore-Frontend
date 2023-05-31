import React from 'react'
import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
    <div className='itemContainer'>
      <div className="ItemImageArea">
      <img src={item.image} className='productImage' alt="" />
      </div>
      <div>
      <span className='productCategory'>{item.category}</span>
        <b className="productName">{item.name}</b>
        <p className='productDescription'>{item.description.slice(0,60)}...</p>
        <b className='productPrice'>{item.price}$</b>
        <button className='btnViewDetail'><Link to={`/detail/${item.id}`}>view detail</Link></button>
        </div>
    </div>
  )
}

export default Item