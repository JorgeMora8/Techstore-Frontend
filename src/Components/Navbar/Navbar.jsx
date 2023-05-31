import React from 'react'
import {Link} from "react-router-dom"
import CartBtnNavbar from '../Cart/CartBtnNavbar'

const Navbar = () => {

  return (

    <>
    <nav className="navbar  navbar-expand-lg bg-body-tertiary navBarCustom" style={{backgroundColor:"#f0f0f0", borderBottom:"1px solid ##d7d7d7"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="../techstorelogoBlack.png" style={{width:"150px", margin:"0px 1rem"}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className='nav-link'>home</Link>
        </li>
        <li className="nav-item">
        <Link to="/order" className='nav-link'>order</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            brands
          </a>
          <ul className="dropdown-menu">
          <li><Link to="/" className='nav-link'>all</Link></li>
            <li><Link to="/brand/apple" className='nav-link'>apple</Link></li>
            <li><Link to="/brand/samsung" className='nav-link'>samsung</Link></li>
            <li><Link to="/brand/xiaomi" className='nav-link'>xiaomi</Link></li>
            <li><Link to="/brand/razer" className='nav-link'>razer</Link></li>
            <li><Link to="/brand/sony" className='nav-link'>sony</Link></li>
            <li><Link to="/brand/lenovo" className='nav-link'>lenovo</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
          <li><Link to="/" className='nav-link'>all</Link></li>
            <li><Link to="/category/phone" className='nav-link'>phone</Link></li>
            <li><Link to="/category/computer" className='nav-link'>computer</Link></li>
            <li><Link to="/category/tv" className='nav-link'>tv</Link></li>
            <li><Link to="/category/headphone" className='nav-link'>headphone</Link></li>
            <li><Link to="/category/accesories" className='nav-link'>accesories</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <CartBtnNavbar />
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar