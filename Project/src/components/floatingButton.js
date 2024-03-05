import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import Fab from "@mui/material/Fab";

const FloatingButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current location is the Menu page
  const isMenuPage = location.pathname === "/menu";

  return isMenuPage ? (
    // <Link to="/orderCart" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
    //   <Fab color="primary" aria-label="view-cart">
    //     View Cart
    //   </Fab>
    // </Link>
    <button
      type="button"
      className="view-cart"
      onClick={() => navigate("orderCart")}
    >
      View Cart
    </button>
  ) : null;
};

export default FloatingButton;
