import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current location is the Menu page
  const isMenuPage = location.pathname === "/menu";

  return isMenuPage ? (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button
        type="button"
        className="view-cart"
        onClick={() => navigate("orderCart")}
      >
        View Cart
      </button>
      <button
        type="button"
        className="view-cart"
        onClick={() => navigate("trackOrder")}
      >
        Track Order
      </button>
    </div>
  ) : null;
};

export default FloatingButton;
