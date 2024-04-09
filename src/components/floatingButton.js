import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faClock } from "@fortawesome/free-solid-svg-icons";

const FloatingButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current location is the Menu page
  const isMenuPage = location.pathname === "/menu";

  // Retrieve cart items from the global variable
  const cartItems = window.cart || [];

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return isMenuPage ? (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button
        type="button"
        className="view-cart"
        onClick={() => navigate("orderCart")}
      >
        <FontAwesomeIcon icon={faShoppingCart} /> <div>View Cart</div>{" "}
        <div
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            backgroundColor: "darkgreen",
            color: "white",
            padding: "1px",
          }}
        >
          {totalQuantity}
        </div>
      </button>
      <button
        type="button"
        className="view-cart"
        style={{
          backgroundColor: "white",
          color: "green",
          border: "2px solid green",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
        }}
        onClick={() => navigate("trackOrder")}
      >
        <FontAwesomeIcon icon={faClock} />{" "}
        <div style={{ paddingRight: "10px" }}>Track Order</div>
      </button>
    </div>
  ) : null;
};

export default FloatingButton;
