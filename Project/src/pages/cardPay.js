import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/cardPay.css";
import tapSvg from "../assets/contactless-icon.svg";
import NavBar from "../components/navBar";

const CardPay = () => {
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

  setTimeout(() => {
    navigate("/paymentComplete");
  }, 5000);

  return (
    <div style={{ backgroundColor: "f8f9fa" }}>
      <NavBar />
      <div>
        <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="textHold">
        <p className="payText">Insert, Swipe or Tap</p>
      </div>

      <div className="footer">
        <div>
          <img src={tapSvg} alt={tapSvg} />
        </div>
      </div>
    </div>
  );
};

export default CardPay;
