import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/orderCart.css";
import TitleNavBar from "../components/titleNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const TrackOrder = () => {
  const [cartItems, setCartItems] = useState(window.cart || []); // State to store the cart items
  const [itemTimers, setItemTimers] = useState([]); // State to store the timers for each item
  const [progress, setProgress] = useState(0); // State to store the progress of the order
  const [currentIndex, setCurrentIndex] = useState(0); // State to store the current index of the order
  const navigate = useNavigate();

  // Update the cart items in local storage when the cart items change
  useEffect(() => {
    const timers = cartItems.map(
      () => Math.floor(Math.random() * (300 - 120 + 1)) + 120
    ); // Random timer between 2 to 5 minutes (120 to 300 seconds)
    setItemTimers(timers);

    const intervalId = setInterval(() => {
      setItemTimers((prevTimers) =>
        prevTimers.map((timer) => (timer > 0 ? timer - 1 : 0))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cartItems]);

  // Update the progress of the order when the current index changes
  useEffect(() => {
    const totalItems = itemTimers.length;
    const totalSections = totalItems * 4;
    const currentSection = currentIndex + 1;
    const progressPerSection = 100 / totalSections;
    const progress = currentSection * progressPerSection;
    setProgress(progress);
  }, [currentIndex, itemTimers.length]);

  // Update the current index when the timer for the current item is less than 25% of the total time
  useEffect(() => {
    const currentTimer = itemTimers[currentIndex];
    if (currentTimer <= itemTimers[currentIndex] / 4) {
      setCurrentIndex((oldIndex) => oldIndex + 1);
    }
  }, [itemTimers, currentIndex]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace("$", ""));
    return total + itemPrice * cartItem.quantity;
  }, 0);

  // Function to handle the pay bill button click
  const handlePayBill = () => {
    navigate(`/payment?totalPrice=${totalPrice}`);
  };

  // Function to handle the return item button click
  const handleReturnItem = (index) => {
    const updatedCartItems = [...cartItems];
    cartItems.splice(index);
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <TitleNavBar title="Track Order" />
      {cartItems.length === 0 || !window.isOrderPlaced ? (
        <div className="empty-cart">
          <p className="empty-message">
            Nothing Ordered Yet.
            <br /> Place an Order to Track It.
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
            <div>
              <div className="cart-item" key={cartItem.item.id}>
                <div className="item">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="item-image"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h3 className="item-title">{cartItem.item.name}</h3>
                    <button
                      type="button"
                      className="view-cart return-button"
                      onClick={() => handleReturnItem(index)}
                    >
                      Return Item
                    </button>
                  </div>
                  <div className="return-item">
                    <p className="item-price">
                      $
                      {parseFloat(cartItem.item.price.replace("$", "")) *
                        cartItem.quantity}
                      .00
                    </p>
                  </div>
                </div>
                <div style={{ width: "600px" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <b>Estimated Time:</b> {Math.floor(itemTimers[index] / 60)}{" "}
                    minutes {itemTimers[index] % 60} seconds
                  </p>
                  <progress value={progress} max={itemTimers[index]} />
                  <div
                    className="progress-bar-labels"
                    style={{ fontWeight: "bold" }}
                  >
                    <p className="label">Order Placed</p>
                    <p className="label">In the Kitchen</p>
                    <p className="label">Ready</p>
                    <p className="label">Arrived</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}

      <div className="footer">
        {cartItems.length > 0 && window.isOrderPlaced ? (
          <div>
            <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
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
                onClick={() => handlePayBill()}
              >
                <FontAwesomeIcon icon={faCreditCard} />
                Checkout
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TrackOrder;
