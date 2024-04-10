import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/paymentComplete.css";
import NavBar from "../components/navBar";

const PaymentComplete = () => {
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
  totalPrice = window.cart.totalPrice; // Total price of the cart
  let feedBackPressed = false;

  // Redirect to the payment complete page after 10 seconds
  if (!feedBackPressed) {
    setTimeout(() => {
      checkIfFeedbackPressed();
    }, 10000);
  }

  // Function to handle the feedback button press
  const handleFeedbackPressed = () => {
    feedBackPressed = true;
    navigate("/feedback");
  };

  // Function to check if the feedback button was pressed
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
