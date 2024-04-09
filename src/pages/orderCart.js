import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/orderCart.css";
import TitleNavBar from "../components/titleNavBar";

const OrderCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(window.cart || []);

  const [temporaryNotes, setTemporaryNotes] = useState({}); // Store temporary notes for each item

  const handleNotesChange = (event, index) => {
    // Store temporary notes for each item as the user types
    setTemporaryNotes({ ...temporaryNotes, [index]: event.target.value });
  };

  const saveNotes = (index) => {
    // Save the temporary notes to the cart item's specialNotes property
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, specialNotes: temporaryNotes[index] };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Clear temporary notes after saving
    setTemporaryNotes({ ...temporaryNotes, [index]: "" });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleBackToMenu = () => {
    navigate("/menu");
  };

  const handleTrackOrder = () => {
    navigate("/trackOrder");
  };

  return (
    <div>
      <TitleNavBar title="Order Cart" />
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
            Go Back to Menu
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
                <p className="item-price">
                  $
                  {parseFloat(cartItem.item.price.replace("$", "")) *
                    cartItem.quantity}
                  .00
                </p>
              </div>
              <div className="item-details">
                <div className="item-quantity">
                  <p style={{ margin: "0px" }}>Quantity</p>
                  <div className="quantity-control">
                    {cartItems[index].quantity === 1 ? (
                      <button
                        className="quantity-button"
                        type="button"
                        onClick={() => {
                          const updatedCartItems = [...cartItems];
                          cartItems.splice(index);
                          updatedCartItems.splice(index);
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

                {cartItem.specialNotes ? (
                  <div>
                    <p>{cartItem.specialNotes}</p>
                  </div>
                ) : (
                  <p>No Special Notes</p>
                )}

                {cartItem.specialNotes && (
                  <button
                    className="save-button"
                    type="button"
                    onClick={() => saveNotes(index)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          ))}
        </ul>
      )}

      <div className="footer">
        {cartItems.length > 0 && (
          <div>
            <p className="total-price">
              Total Price: ${calculateTotalPrice(cartItems).toFixed(2)}
            </p>
            <button
              type="button"
              className="back-button"
              onClick={() => handleBackToMenu()}
            >
              Go Back to Menu
            </button>
            <button
              type="button"
              className="order-button"
              onClick={() => handleTrackOrder()}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
};

export default OrderCart;
