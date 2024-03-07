import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import "../styles/paymentComplete.css";

const PaymentComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [cartItems] = useState(window.cart);
  const subTotal = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
  const tax = subTotal * 0.05;
  const totalPrice = subTotal + tax;

  return (

<div>
  <header class="displayLogo">
    <div className="mainLogo">
      <h1>
        <span style={{ color: "red" }}>X</span>
        <span style={{ color: "blue" }}>Y</span>
        <span style={{ color: "green" }}>Z</span> Bistro
      </h1>
      <p>Since 2015</p>
    </div>
  </header>

  <div>
    <p className ="total-price">Total: ${totalPrice.toFixed(2)}</p>
  </div>

<div className = "holderHolder">
  <div className = "textHolder">
    <p className = "thanksText">Thank You</p>
    <p className= "thanksText"> for dining with us!</p>
  </div>
</div>

    <p className = "thanksTextUnderLine"> See you again soon!</p>


  <div className="foot">
          <div>
            <button
              type="button"
              className="feedback-button"
              onClick={() => navigate("/feedback")}
            >
              Tell us how we did
            </button>
          </div>
      </div>
</div>
  );
};

export default PaymentComplete;
