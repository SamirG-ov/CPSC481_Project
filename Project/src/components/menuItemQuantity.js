import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function MenuItemQuantity({ item }) {
  const [quantity, setQuantity] = useState(0); // Initialize quantity with 0
  const location = useLocation();
  const { menuItem } = location.state || {};

  // TODO: Implement logic to add or remove item from cart
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    // addToOrder(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      //   removefromOrder();
    }
  };

  const addToOrder = (newQuantity) => {
    // Implement logic to add item to cart
    // Check if the item already exists in the cart
    const existingCartItemIndex = window.cart
      ? window.cart.findIndex(
          (cartItem) => cartItem.item.name === menuItem.name
        )
      : -1;

    if (existingCartItemIndex !== -1) {
      // If the item exists, update its quantity
      window.cart[existingCartItemIndex].quantity = newQuantity;
    } else {
      // If the item doesn't exist, add it to the cart
      const cartItem = { menuItem, quantity: newQuantity };
      window.cart = window.cart ? [...window.cart, cartItem] : [cartItem];
    }
  };

  const removefromOrder = () => {
    // Implement logic to remove item from cart
    if (window.cart) {
      const index = window.cart.findIndex(
        (cartItem) => cartItem.item.name === menuItem.name
      );
      if (index !== -1) {
        const newCart = [...window.cart];
        newCart.splice(index, 1);
        window.cart = newCart;
      }
    }
  };

  const buttonStyle = {
    backgroundColor: "#148014",
    color: "white",
    borderRadius: "10px",
    width: "35px",
    height: "30px",
    cursor: "pointer",
  };

  return (
    <div style={{ margin: "20px" }}>
      <button type="button" style={buttonStyle} onClick={decreaseQuantity}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span style={{ padding: "10px" }}>{quantity}</span>
      <button type="button" style={buttonStyle} onClick={increaseQuantity}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default MenuItemQuantity;
