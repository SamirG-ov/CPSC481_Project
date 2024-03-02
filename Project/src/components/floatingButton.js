import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Fab from '@mui/material/Fab';

const FloatingButton = () => {
  const location = useLocation();

  // Check if the current location is the Menu page
  const isMenuPage = location.pathname === '/menu';

  return isMenuPage ? (
    <Link to="/orderCart" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      <Fab color="primary" aria-label="view-cart">
        View Cart
      </Fab>
    </Link>
  ) : null;
};

export default FloatingButton;
