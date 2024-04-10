import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/cardPay.css";
import tapSvg from "../assets/contactless-icon.svg";
import NavBar from "../components/navBar";

const CardPay = () => {
  const navigate = useNavigate();
  const [cartItems] = useState(window.cart); // State to store the cart items
  // Calculate the total price of the cart
  const subTotal = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
  const tax = subTotal * 0.05;
  let totalPrice = subTotal + tax;
  totalPrice = window.cart.totalPrice;

  // Redirect to the payment complete page after 5 seconds
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
