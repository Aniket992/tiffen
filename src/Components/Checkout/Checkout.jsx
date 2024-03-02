import React, { useState } from 'react';
import './Checkout.css'
const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Payment submitted:', formData);
    // You would typically integrate with a payment gateway on your server here
    // For example, using Stripe or another payment service
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} />
        </label>
        <br />
        <label>
          CVC:
          <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} />
        </label>
        <br />
        <button id='button' type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
