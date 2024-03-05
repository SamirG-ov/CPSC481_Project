import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/orderCart.css";

const OrderCart = () => {
  const navigate = useNavigate();
  // Retrieve cart items from the global variable or any state management system
  const [cartItems, setCartItems] = useState(window.cart || []);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);

  const handleNotesChange = (event, index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].notes = event.target.value;
    setCartItems(updatedCartItems);
  };

  const saveNotes = (index) => {
    // Save the notes for the item at the specified index in the cart
    // You can implement saving logic here, such as sending a request to a server
    console.log(
      `Notes saved for item at index ${index}:`,
      cartItems[index].notes
    );
  };

  const handlePayBill = () => {
    // Navigate to the payment page with total price as a query parameter
    navigate(`/payment?totalPrice=${totalPrice}`);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h1>
            <span style={{ color: "red" }}>X</span>
            <span style={{ color: "blue" }}>Y</span>
            <span style={{ color: "green" }}>Z</span> Bistro
          </h1>
          <p>Since 2015</p>
        </div>
        <h1 className="title">Order Cart</h1>
      </header>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-message">
            Your cart is empty.
            <br /> Go to the menu to add items.
          </p>
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/menu")}
          >
            Continue Browsing
          </button>
        </div>
      ) : (
        <ul style={{ paddingLeft: "0px" }}>
          {cartItems.map((cartItem, index) => (
            <div className="cart-item" key={cartItem.item.id}>
              <div className="item">
                <img
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  className="item-image"
                />
                <h3 className="item-title">{cartItem.item.name}</h3>
                <p className="item-price">{cartItem.item.price}.00</p>
              </div>
              <div className="item-details">
                <div className="item-quantity">
                  <p style={{ margin: "0px" }}>Quantity</p>
                  <div className="quantity-control">
                    {cartItems[index].quantity === 1 ? ( // TODO: When item is deleted and the user leaves the page and comes back, the item is back
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() => {
                          const updatedCartItems = [...cartItems];
                          updatedCartItems.splice(index, 1);
                          setCartItems(updatedCartItems);
                        }}
                      >
                        🗑️
                      </button>
                    ) : (
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() => {
                          const updatedCartItems = [...cartItems];
                          updatedCartItems[index].quantity -= 1;
                          setCartItems(updatedCartItems);
                        }}
                      >
                        -
                      </button>
                    )}
                    <span> {cartItem.quantity} </span>
                    <button
                      className="quantity-button"
                      type="button"
                      onClick={() => {
                        const updatedCartItems = [...cartItems];
                        updatedCartItems[index].quantity += 1;
                        setCartItems(updatedCartItems);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Textarea for special notes */}

                <label
                  style={{
                    alignSelf: "start",
                    paddingTop: "30px",
                    paddingBottom: "5px",
                  }}
                  htmlFor={`special-notes-${index}`}
                >
                  Special Notes:
                </label>
                <div className="special-notes">
                  <textarea
                    id={`special-notes-${index}`}
                    name={`special-notes-${index}`}
                    value={cartItem.notes || ""}
                    onChange={(event) => handleNotesChange(event, index)}
                    rows="2"
                    cols="30"
                    placeholder="Add any special requests here."
                  />
                  {/* Save button for notes */}
                  <button
                    className="save-button"
                    type="button"
                    onClick={() => saveNotes(index)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}

      <div className="footer">
        {/* Total price */}
        {cartItems.length > 0 && (
          <div>
            <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
            <button
              type="button"
              className="back-button"
              onClick={() => navigate("/menu")}
            >
              Continue Browsing
            </button>
            <button
              type="button"
              className="order-button"
              onClick={() => handlePayBill()}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCart;
