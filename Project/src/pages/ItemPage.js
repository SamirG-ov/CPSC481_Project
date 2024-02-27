import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const ItemPage = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div>
      <Typography variant="h4">{item.name}</Typography>
      <Typography variant="subtitle1">{item.price}</Typography>
      <Typography variant="body1">{item.description}</Typography>
      {item.image && <img src={item.image} alt={item.name} />}
    </div>
  );
};

export default ItemPage;
