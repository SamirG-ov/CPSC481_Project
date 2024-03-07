import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ItemPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToOrder = () => {
    // Implement logic to add item to cart
    // For simplicity, let's assume a global variable 'cart' to store cart items
    const cartItem = { item, quantity };
    window.cart = window.cart ? [...window.cart, cartItem] : [cartItem];

    // Display success message
    alert(`${quantity} ${item.name}(s) added to cart`);

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
          paddingTop: "20px",
          height: "400px",
          backgroundImage: `url(${item.image})`,
        }}
      />
      <div style={{ padding: "0px 20px 0px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "#148014" }}>{item.name}</h1>
          {/* Quantity control */}
          <div style={{ paddingTop: "35px" }}>
            <button
              type="button"
              style={{ backgroundColor: "#148014", color: "white" }}
              className="quantity-button"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span style={{ padding: "5px" }}>{quantity}</span>
            <button
              type="button"
              style={{ backgroundColor: "#148014", color: "white" }}
              className="quantity-button"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
        <h2>{item.price}.00</h2>
        <Typography variant="body1">{item.description2}</Typography>

        <div style={{ paddingTop: "20px" }}>
          <label
            style={{
              alignSelf: "start",
              paddingTop: "30px",
              paddingBottom: "5px",
            }}
            // htmlFor={`special-notes-${index}`}
          >
            Special Notes:
          </label>
          <div className="special-notes">
            <textarea
              // id={`special-notes-${index}`}
              // name={`special-notes-${index}`}
              // value={cartItem.notes || ""}
              // onChange={(event) => handleNotesChange(event, index)}
              rows="5"
              cols="155"
              placeholder="Add any special requests here."
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
              className="back-button"
              onClick={() => navigate("/menu")}
            >
              Continue Browsing
            </button>
          </div>

          <button
            type="button"
            style={{ width: "500px" }}
            className="order-button"
            onClick={addToOrder}
          >
            Add to Order
          </button>
        </div>
      </div>
      <footer style={{ paddingTop: "20px" }} />
    </div>
  );
};

export default ItemPage;
