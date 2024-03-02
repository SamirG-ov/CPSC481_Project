import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
    navigate('/menu');
  };

  if (!item) {
    // Handle case where item is not found in location state
    return <div>Item not found</div>;
  }

  return (
    <div>
      <Typography variant="h4">{item.name}</Typography>
      <Typography variant="subtitle1">{item.price}</Typography>
      <Typography variant="body1">{item.description}</Typography>
      {item.image && <img src={item.image} alt={item.name} />}

      {/* Quantity control */}
      <div>
        <Button variant="contained" onClick={decreaseQuantity}>-</Button>
        <span>{quantity}</span>
        <Button variant="contained" onClick={increaseQuantity}>+</Button>
      </div>

      {/* Add to order button */}
      <Button variant="contained" onClick={addToOrder}>Add to Order</Button>
    </div>
  );
};

export default ItemPage;
