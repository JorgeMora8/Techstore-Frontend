import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getContext } from '../../Context/AppContext'
import axios from 'axios'
import Loading from '../../Loading/Loading'

const ItemDetailContainer = () => {

    const {productId} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {getFetch} = getContext()

    useEffect(()=> { 
      axios.get(`https://reactapp-backend-r116.onrender.com/products/${productId}`)
      .then((resp) => resp.data)
      .then((resp) => {
        setLoading(false)
        setProduct(resp)})
      .catch((err) => console.log(err))
    }, [])

  return (
    <div className='productDetailContainer'>
        {loading ? <Loading /> :<ItemDetail data={product} />}
    </div>
  )
}

export default ItemDetailContainer