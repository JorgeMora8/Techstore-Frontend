import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
  
  const {category} = useParams()

  return (
    <>
        <div className="headerContainer">
          <img src="../techstorelogowhite.png" className='headerLogo' alt="" />
          <b className='headerText'>The best tech products in the market</b>
    </div>
        <ItemList category={category}/>
    </>
  )
}

export default ItemListContainer