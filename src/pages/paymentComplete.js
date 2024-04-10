import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/paymentComplete.css";
import NavBar from "../components/navBar";

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
  let totalPrice = subTotal + tax;
  totalPrice = window.cart.totalPrice;
  let feedBackPressed = false;

  if (!feedBackPressed) {
    setTimeout(() => {
      checkIfFeedbackPressed();
    }, 10000);
  }

  const handleFeedbackPressed = () => {
    feedBackPressed = true;
    navigate("/feedback");
  };

  const checkIfFeedbackPressed = () => {
    if (!feedBackPressed) {
      navigate("/");
      window.cart = [];
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="textHolder">
        <p className="thanksText">Thank You for dining with us!</p>
      </div>

      <p className="thanksTextUnderLine"> See you again soon!</p>

      <div className="foot">
        <div>
          <button
            type="button"
            className="feedback-button"
            style={{ fontSize: "30px" }}
            onClick={() => {
              handleFeedbackPressed();
            }}
          >
            Tell us how we did
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentComplete;
