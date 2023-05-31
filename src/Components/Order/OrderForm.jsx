import React from 'react'
import {Link} from "react-router-dom"


const OrderForm = () => {
  return (
    <div className="formContainer">
      <div className="formArea">
      <form action='done' method='GET'>
  <div class="mb-3">
    <label for="firstnameinput" className="form-label">First name</label>
    <input type="text" required className="form-control" id="firstnameinput" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="lastnameinput" className="form-label">last name</label>
    <input type="text" required className="form-control" id="lastnameinput" />
  </div>
  <div className="mb-3">
    <label for="emailinput" className="form-label">email address</label>
    <input type="email" required className="form-control" id="emailinput" />
  </div>
  <div className="mb-3">
    <label for="passwordinput" className="form-label">password</label>
    <input type="password" required className="form-control" id="passwordinput" />
  </div>
  <div className="mb-3">
    <label for="cardinput" className="form-label">card code</label>
    <input type="password" required className="form-control" id="cardinput" />
  </div>
  <button className="btn btn-primary btnFormLink"><Link to="/done" style={{color:"#fff"}}>submit</Link></button>
</form>
      </div>
    </div>
  )
}

export default OrderForm