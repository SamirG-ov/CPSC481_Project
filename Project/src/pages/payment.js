import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = parseFloat(searchParams.get('totalPrice')).toFixed(2);

  return (
    <div>
      <h1>Payment</h1>
      <p>Total Price: ${totalPrice}</p>
      <Link to="/feedback">
        <button>Give us your feedback</button>
      </Link>
    </div>
  );
};

export default Payment;
