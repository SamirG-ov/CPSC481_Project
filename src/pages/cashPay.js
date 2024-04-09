import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/cashPay.css";
import NavBar from "../components/navBar";

const CashPay = () => {
  const navigate = useNavigate();
  const [cartItems] = useState(window.cart);
  const subTotal = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
  const tax = subTotal * 0.05;
  const totalPrice = subTotal + tax;

  setTimeout(() => {
    navigate("/paymentComplete");
  }, 5000);

  return (
    <div>
      <NavBar />
      <div>
        <p style={{ fontSize: "50px" }} className="total-price">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <div
        style={{ margin: "20px", textAlign: "center", paddingTop: "40px" }}
        className="textHolder"
      >
        <p
          style={{ padding: "20px", textAlign: "center" }}
          className="thanksText"
        >
          Assistance will be with you shortly to take your cash payment.
        </p>
      </div>
    </div>
  );
};

export default CashPay;
