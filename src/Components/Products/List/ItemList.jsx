import React, { useEffect, useState } from 'react'
import Item from './Item'
import Loading from '../../Loading/Loading'
import axios from 'axios'

const ItemList = ({category}) => {

  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> { 
    if(!category){
    axios.get("https://reactapp-backend-r116.onrender.com/products")
    .then((resp) => resp.data)
    .then((resp) => {
      setProducts(resp)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }else{ 
    axios.get(`https://reactapp-backend-r116.onrender.com/products/category/${category}`)
    .then((resp) => resp.data)
    .then((resp) => {
      setProducts(resp)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }
  }, [category])
  
  return (
    <>
      <div className='productItemList'>
        {loading ? <Loading /> :products.map((product) => <Item key={product.id} item={product} />)}
    </div>
    </>
  )
}

export default ItemList