import React, { useState,useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/orderCart.css";
import TitleNavBar from "../components/titleNavBar";

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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleDeleteItem = (index) => {
    // Create a new array excluding the item at the specified index
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    // Create a new array with the quantity updated for the item at the specified index
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
                    {cartItems[index].quantity === 1 ? ( // TODO: When item is deleted and the user leaves the page and comes back, the item is back
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

export default OrderCart;
