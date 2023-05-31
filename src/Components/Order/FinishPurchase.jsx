import React, { useEffect, useState } from 'react'
import { getContext } from '../Context/AppContext'
import FinishOrderItem from './FinishOrderItem'

const FinishPurchase = () => {

  const {clearCart} = getContext()

  useEffect(()=>{ 
    clearCart()
  }, [])

  return (
    <div className='orderFinishContainer'>
        <div className="orderFinishSpecification">
            <div className="imageLogoContainer">
                <img src="../techstorelogoBlack.png" className='imageLogoOrderFinish' alt="" />
            </div>
            <div className="orderFinishText">
                <h2 className='orderFinishTitle'>Thanks for the purchase</h2>
                <p className='orderFinishText'>On a few days, all the products will be send to you. Thanks for buy in Techstore</p>
            </div>

            
        </div>
    </div>
  )
}

export default FinishPurchase