import React, { useContext } from 'react'
import {useState} from 'react';
import './Navbar.css'
import logo from '../Assests/main.png'
import cart_icon from '../Assests/cart_icon.png'
import {Link} from 'react-router-dom';
import { SignOutButton, UserButton} from "@clerk/clerk-react"
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src = {logo} alt="" />
        <p>TIFFEN-BUDDY</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link  style ={{ textDecoration: 'none'}} to ='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("breakfast")}}><Link style ={{ textDecoration: 'none'}}  to ='/breakfast'>Breakfast</Link>{menu==="breakfast"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("lunch")}}><Link style ={{ textDecoration: 'none'}}  to ='/lunch'>Lunch</Link>{menu==="lunch"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("dinner")}}><Link style ={{ textDecoration: 'none'}}  to ='/dinner'>Dinner</Link>{menu==="dinner"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Sign in</button>
      {/* <SignOutButton/> */}
      <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
