import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import'./CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItems = () => {
const {all_product,cartItems,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
const navigate = useNavigate();

const handleProceedToCheckout = () => {
    navigate('/Checkout');
};
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
    <p>Remove</p>
    </div>
     <hr />
     
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            
            <div className="cartitems-format cartitems-format-main">
       <img src={e.image} alt="" className='carticon-product-icon' />
       <p>{e.name}</p>
       <p>{e.new_price}</p>
       <button className='cartitems-quantity'>{cartItems[e.id]}</button>
       <p>₹{e.new_price*cartItems[e.id]}</p>
       <img src={remove_icon} className='.cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />

            </div>
            <hr />

            </div>
        }
        return null;
     })}
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Platform Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                </div>
                <button onClick={handleProceedToCheckout}>Proceed To Checkout</button>

            </div>
        </div>
    </div>
  
   </div>

    
  )
}

export default CartItems
