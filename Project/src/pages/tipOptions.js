import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/tipOptions.css";

const TipOptions = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  <header>
    <div className="logo">
      <h1>
        <span style={{ color: "red" }}>X</span>
        <span style={{ color: "blue" }}>Y</span>
        <span style={{ color: "green" }}>Z</span> Bistro
      </h1>
      <p>Since 2015</p>
    </div>
    <h1 className="title">Add a Tip</h1>
    <button className = "quantity-button">↩️</button>
  </header>
  <div style={{ "font-weight": "bold" }} className = "text-holder">Total: ${totalPrice.toFixed(2)}</div>
  <div className = "button-holder">
    <button class = "tip-button">{(totalPrice*0.15).toFixed(2)}<br></br>15%</button>
    <button class = "tip-button">{(totalPrice*0.18).toFixed(2)}<br></br>18%</button>
  </div>
  <div className = "button-holder">
  <button class = "tip-button">{(totalPrice*0.20).toFixed(2)}<br></br>20%</button>
  <button class = "tip-button">{(totalPrice*0.23).toFixed(2)}<br></br>23%</button>
  </div>
  <div class = "button-holder">
    <button class = "tip-button">No Tip</button>
    <button class = "tip-button">Custom<br></br><input type = "text"></input></button>
  </div>
  <div class = "footer">
    <button
              type="button"
              className="apply-button"
              onClick={() => navigate("/cardPay")}
            >
              Apply
            </button>
    </div>
</div>
  );
};

export default TipOptions;
