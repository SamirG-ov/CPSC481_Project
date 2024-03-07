import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import "../styles/cashPay.css";

const CashPay = () => {
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

  <div className = "textHold">
    <p className = "textBox">Assistance will be with you shortly to take your cash payment.</p>
  </div>

  <div className="footer">
          <div>
            <button
              type="button"
              className="pay-button"
              onClick={() => navigate("/paymentComplete")}
            >
              Payment Complete
            </button>
          </div>
      </div>
</div>
  );
};

export default CashPay;
