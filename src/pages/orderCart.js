import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/orderCart.css";
import TitleNavBar from "../components/titleNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCheckCircle,
  faMinus,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const OrderCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(window.cart || []); // State to store the cart items

  // Update the cart items in local storage when the cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    if (cartItems.length === 0) {
      localStorage.setItem("orderPlaced", "false");
    }
  }, [cartItems]);

  // Function to handle the track order button click
  const handleTrackOrder = () => {
    window.isOrderPlaced = true;
    navigate("/trackOrder");
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <TitleNavBar title="Order Cart" />
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-message">
            Your cart is empty.
            <br /> Go to the menu to add items.
          </p>
          <button
            type="button"
            className="view-cart"
            style={{
              backgroundColor: "white",
              color: "green",
              border: "2px solid green",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
              width: "220px",
              justifyContent: "space-evenly",
              fontSize: "20px",
            }}
            onClick={() => navigate("/menu")}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
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
                <div className="item-quantity1">
                  <p
                    style={{
                      margin: "0px",
                      paddingRight: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Quantity:
                  </p>
                  <div className="quantity-control">
                    {cartItems[index].quantity === 1 ? (
                      <button
                        style={{
                          backgroundColor: "#148014",
                          color: "white",
                          borderRadius: "10px",
                          width: "35px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={() => {
                          const updatedCartItems = [...cartItems];
                          cartItems.splice(index);
                          updatedCartItems.splice(index);
                          setCartItems(updatedCartItems);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    ) : (
                      <button
                        style={{
                          backgroundColor: "#148014",
                          color: "white",
                          borderRadius: "10px",
                          width: "35px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={() => {
                          const updatedCartItems = [...cartItems];
                          updatedCartItems[index].quantity -= 1;
                          setCartItems(updatedCartItems);
                        }}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    )}
                    <span style={{ padding: "5px" }}>
                      {" "}
                      {cartItem.quantity}{" "}
                    </span>
                    <button
                      style={{
                        backgroundColor: "#148014",
                        color: "white",
                        borderRadius: "10px",
                        width: "35px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      type="button"
                      onClick={() => {
                        const updatedCartItems = [...cartItems];
                        updatedCartItems[index].quantity += 1;
                        setCartItems(updatedCartItems);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>

                {cartItem.specialNotes ? (
                  <div>
                    <p
                      style={{
                        border: "black solid 1px",
                        padding: "5px",
                        width: "170px",
                      }}
                    >
                      {cartItem.specialNotes}
                    </p>
                  </div>
                ) : (
                  <p
                    style={{
                      border: "black solid 1px",
                      padding: "5px",
                      color: "gray",
                    }}
                  >
                    No Special Notes
                  </p>
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                type="button"
                className="view-cart"
                style={{
                  backgroundColor: "white",
                  color: "green",
                  border: "2px solid green",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
                  width: "220px",
                  justifyContent: "space-evenly",
                  fontSize: "20px",
                }}
                onClick={() => navigate("/menu")}
              >
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                Go Back to Menu
              </button>
              <button
                type="button"
                className="add-to-cart-button2"
                style={{ margin: "10px" }}
                onClick={() => {
                  handleTrackOrder();
                  localStorage.setItem("orderPlaced", "true");
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Function to calculate the total price of the cart items
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);
};

export default OrderCart;
