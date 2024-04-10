import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function MenuItemQuantity({ item, onQuantityChange }) {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  const [quantity, setQuantity] = useState(0); // Initialize quantity with 0

  useEffect(() => {
    if (!isMenuPage) {
      setQuantity(1);
    }
  }, [isMenuPage]);

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    if (quantity > 1 && !isMenuPage) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    } else if (quantity > 0 && isMenuPage) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  // Style for the quantity buttons
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
