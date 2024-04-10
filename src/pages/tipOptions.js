import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/tipOptions.css";
import TitleNavBar from "../components/titleNavBar";

const TipOptions = () => {
  const navigate = useNavigate();
  const [cartItems] = useState(window.cart); // State to store the cart items
  // Calculate the total price of the cart
  const subTotal = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
  const tax = subTotal * 0.05;
  const totalPrice = subTotal + tax;

  // Function to set the total price
  const setTotal = (newTotal) => {
    window.cart.totalPrice = parseFloat(totalPrice) + parseFloat(newTotal);
  };

  return (
    <div>
      <TitleNavBar title="Add a Tip" />
      <div
        style={{ "font-weight": "bold", fontSize: "30px" }}
        className="text-holder"
      >
        Total: ${totalPrice.toFixed(2)}
      </div>
      <div className="button-holder">
        <button
          type="button"
          class="tip-button"
          onClick={() => {
            setTotal((totalPrice * 0.15).toFixed(2));
          }}
        >
          {(totalPrice * 0.15).toFixed(2)}
          <br />
          15%
        </button>
        <button
          type="button"
          class="tip-button"
          onClick={() => {
            setTotal((totalPrice * 0.18).toFixed(2));
          }}
        >
          {(totalPrice * 0.18).toFixed(2)}
          <br />
          18%
        </button>
      </div>
      <div className="button-holder">
        <button
          type="button"
          class="tip-button"
          onClick={() => {
            setTotal((totalPrice * 0.2).toFixed(2));
          }}
        >
          {(totalPrice * 0.2).toFixed(2)}
          <br />
          20%
        </button>
        <button
          type="button"
          class="tip-button"
          onClick={() => {
            setTotal((totalPrice * 0.23).toFixed(2));
          }}
        >
          {(totalPrice * 0.23).toFixed(2)}
          <br />
          23%
        </button>
      </div>
      <div class="button-holder">
        <button
          type="button"
          class="tip-button"
          onClick={() => {
            setTotal(totalPrice.toFixed(2));
          }}
        >
          No Tip
        </button>
        <button type="button" class="tip-button">
          Custom
          <br />
          <input type="text" />
        </button>
      </div>
      <div class="footer">
        <button
          type="button"
          className="view-cart"
          onClick={() => navigate("/cardPay")}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default TipOptions;
