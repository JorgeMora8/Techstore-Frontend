import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className="footerNavContainer">
            <ul className='footerNavLink'>
                <li className='footerLink'><Link to="/">home</Link></li>
                <li className='footerLink'><Link to="/order">order</Link></li>
                <li className='footerLink'><Link to="/cart">cart</Link></li>
            </ul>
            
        </div>

        <img src="../techstorelogowhite.png" style={{width:"200px"}} alt="" />
    </div>
    <div className="rightAreaContainer">
        <b>2023 all rights reserved</b>
    </div>
    </>
  )
}

export default Footer