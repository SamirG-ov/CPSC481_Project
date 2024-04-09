import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuItemQuantity from "../components/menuItemQuantity";
import BackButton from "../components/backButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const ItemPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1
  const [specialNotes, setSpecialNotes] = useState(""); // Add state to store special notes

  const handleNotesChange = (event) => {
    setSpecialNotes(event.target.value);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToOrder = () => {
    // Implement logic to add item to cart
    // For simplicity, let's assume a global variable 'cart' to store cart items
    const cartItem = { item, quantity, specialNotes }; // Pass specialNotes here
    window.cart = window.cart ? [...window.cart, cartItem] : [cartItem];
    navigate("/menu");

    // Redirect to menu page
    navigate("/menu");
  };

  if (!item) {
    // Handle case where item is not found in location state
    return <div>Item not found</div>;
  }

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          height: "330px",
          backgroundImage: `url(${item.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
        }}
      >
        <BackButton />
      </header>
      <div style={{ padding: "0px 20px 0px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "#148014" }}>{item.name}</h1>

          <div
            style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
          >
            <MenuItemQuantity
              item={item}
              onQuantityChange={handleQuantityChange}
            />
          </div>
        </div>
        <h2>{item.price}.00</h2>
        <Typography variant="body1" sx={{ fontSize: "20px" }}>
          {item.description}
        </Typography>

        <div style={{ paddingTop: "20px" }}>
          <label
            style={{
              alignSelf: "start",
              paddingTop: "30px",
              paddingBottom: "5px",
              fontSize: "20px",
            }}
            // htmlFor={`special-notes-${index}`}
          >
            Special Notes:
          </label>
          <div className="special-notes">
          <textarea
            id="special-notes"
            value={specialNotes}
            onChange={handleNotesChange}
            rows="4"
            cols="155"
            placeholder="Add any special requests here."
            style={{ fontSize: "20px" }}
          />
        </div>
        </div>

        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <button
              type="button"
              className="view-cart"
              style={{
                backgroundColor: "white",
                color: "green",
                border: "2px solid green",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
                width: "210px",
                justifyContent: "space-evenly",
                fontSize: "20px",
              }}
              onClick={() => navigate("/menu")}
            >
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              Go Back to Menu
            </button>
          </div>

          <button
            type="button"
            className="add-to-cart-button2"
            onClick={addToOrder}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            Add to Order
          </button>
        </div>
      </div>
      <footer style={{ paddingTop: "20px" }} />
    </div>
  );
};

export default ItemPage;
