import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [cartItems] = useState(window.cart);

  const subTotal = cartItems
    ? cartItems.reduce((total, cartItem) => {
        const menuItem = cartItem.item;
        const itemPrice = parseFloat(menuItem.price.replace("$", ""));
        return total + itemPrice * cartItem.quantity;
      }, 0)
    : 0;
  const tax = subTotal * 0.05;
  const totalPrice = subTotal + tax;

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
        <h1 className="title">Order Summary</h1>
      </header>
      <div className="cart-item">
        <h3 className="item-title" style={{ color: "black" }}>
          Item
        </h3>
        <h3 className="item-price">Price</h3>
        <h3 className="item-quantity">Quantity</h3>
      </div>
      <ul style={{ paddingLeft: "0px" }}>
        {cartItems &&
          cartItems.map((cartItem, index) => (
            <div className="cart-item" key={cartItem.item.id}>
              <div className="item">
                <h3 className="item-title">{cartItem.item.name}</h3>
                <p className="item-price">{cartItem.item.price}.00</p>
                <p className="item-quantity">{cartItems[index].quantity}</p>
              </div>
            </div>
          ))}
      </ul>

      <div className="footer">
        {/* Total price */}
        {cartItems && cartItems.length > 0 && (
          <div>
            <p className="total-price">Subtotal: ${subTotal}.00</p>
            <p className="total-price">Tax (GST)(5%): ${tax.toFixed(2)}</p>
            <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
            <button
              type="button"
              className="pay-button"
              onClick={() => navigate("/payBill")}
            >
              Pay Bill
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
