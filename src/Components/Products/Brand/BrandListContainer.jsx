import React, { useEffect, useState } from 'react'
import Loading from '../../Loading/Loading'
import Item from '../List/Item'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BrandListContainer = () => {

  const {productBrand} = useParams()
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> { 
      axios.get(`https://reactapp-backend-r116.onrender.com/products/brand/${productBrand}`)
      .then((resp) => setProduct(resp.data))
      .then((resp) => setLoading(false))
      .catch((err) => console.log(err))
  }, [productBrand])

  return (
    <div className='brandListContainer'>
      <b className='productBrandTitle'>{productBrand}</b>

      <div className="productBrandListContainer">
        {loading ? <Loading/>:products.map((product) => <Item key={product.id} item={product} />)}
      </div>
    </div>
  )
}

export default BrandListContainer