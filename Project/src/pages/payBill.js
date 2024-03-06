import React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "../styles/payBill.css";

const PayBill = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <h1 className="title">PayBill</h1>
  </header>
  <div style={{ "font-weight": "bold" }} className = "text-holder">Accepted Forms of Payment</div>
  <div className = "button-holder">
    <button class = "pay-button">Visa</button>
    <button class = "pay-button">MasterCard</button>
  </div>
  <div className = "button-holder">
  <button class = "pay-button">Debit</button>
  <button class = "pay-button">Cash</button>
  </div>
  <div class = "button-holder"><button class = "pay-button">Gift Card</button></div>

</div>
  );
};

export default PayBill;
