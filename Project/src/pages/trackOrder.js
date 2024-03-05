import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackOrder = () => {
  const cartItems = window.cart || [];
  const [itemTimers, setItemTimers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = cartItems.map(() => Math.floor(Math.random() * (300 - 120 + 1)) + 120); // Random timer between 2 to 5 minutes (120 to 300 seconds)
    setItemTimers(timers);

    const intervalId = setInterval(() => {
      setItemTimers(prevTimers => prevTimers.map(timer => (timer > 0 ? timer - 1 : 0)));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [cartItems]);

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  return (
    <div>
      <h1>Track Order</h1>
      <button onClick={handleBackToMenu}>Back to Menu</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index}>
              <h3>{cartItem.item.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
              <p>Estimated Time: {Math.floor(itemTimers[index] / 60)} minutes {itemTimers[index] % 60} seconds</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrackOrder;
