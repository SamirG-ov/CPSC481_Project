import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/payment.css";
import TitleNavBar from "../components/titleNavBar";

const Payment = () => {
  const navigate = useNavigate();
  const [cartItems] = useState(window.cart); // State to store the cart items

  // Calculate the total price of the cart
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
      <TitleNavBar title="Order Summary" />
      <div className="cart-item">
        <h3 className="item-title" style={{ color: "black" }}>
          Item
        </h3>
        <h3 className="item-price">Price</h3>
        <h3 className="item-quantity">Quantity</h3>
      </div>
      <ul style={{ paddingLeft: "0px" }}>
        {cartItems?.map((cartItem, index) => (
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <p className="total-price">Subtotal: CA${subTotal}.00</p>
            <p className="total-price">Tax (GST)(5%): CA${tax.toFixed(2)}</p>
            <p className="total-price">
              Total Price: CA${totalPrice.toFixed(2)}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                className="view-cart"
                style={{ margin: "20px", width: "250px" }}
                onClick={() => navigate("/payBill")}
              >
                Pay Bill
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
