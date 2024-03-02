import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OrderCart = () => {
  const navigate = useNavigate();
  // Retrieve cart items from the global variable or any state management system
  const [cartItems, setCartItems] = useState(window.cart || []);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const menuItem = cartItem.item;
    const itemPrice = parseFloat(menuItem.price.replace('$', ''));
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
    console.log(`Notes saved for item at index ${index}:`, cartItems[index].notes);
  };

  const handlePayBill = () => {
    // Navigate to the payment page with total price as a query parameter
    navigate(`/payment?totalPrice=${totalPrice}`);
  };

  return (
    <div>
      <h1>Order Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index}>
              <h3>{cartItem.item.name}</h3>
              <img src={cartItem.item.image} alt={cartItem.item.name} style={{ width: '100px', height: '100px' }} />
              <p>Quantity: {cartItem.quantity}</p>
              {/* Textarea for special notes */}
              <div>
                <label htmlFor={`special-notes-${index}`}>Special Notes:</label>
                <textarea
                  id={`special-notes-${index}`}
                  name={`special-notes-${index}`}
                  value={cartItem.notes || ''}
                  onChange={(event) => handleNotesChange(event, index)}
                  rows="4"
                  cols="50"
                  placeholder="Enter special notes for this item..."
                />
                {/* Save button for notes */}
                <button onClick={() => saveNotes(index)}>Save</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Total price */}
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          {/* Pay The Bill button */}
          <button onClick={handlePayBill}>Pay The Bill</button>
        </div>
      )}

      {/* Back button to navigate back to the menu page */}
      <Link to="/menu">Back to Menu</Link>
    </div>
  );
};

export default OrderCart;
