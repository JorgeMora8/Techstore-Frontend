import React from 'react'
import {Link} from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className='emptyCartTextContainer'>
        <div className="emptyCartTextArea">
          <img src="./techstorelogowhite.png" className='loadingLogo'  alt="" />
        <h1 className='emptyCartTitle'>Your cart is <span>empty</span></h1>
        <p className='emptyCartText'>The products that you save will be reflected here</p>
        <button className='emptyCartBtn'><Link to="/">Go Shopping</Link></button>
        </div>
    </div>
  )
}

export default EmptyCart