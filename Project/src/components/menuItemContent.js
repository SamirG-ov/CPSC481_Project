import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  return (
    <div>
      <Typography variant="h5">{category}</Typography>
      <ul style={{ listStylePosition: 'inside', paddingInlineStart: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          {item.image && <img src={item.image} alt={item.name} style={{ marginRight: '10px', width: '100px', height: '100px', objectFit: 'cover' }} />}
            <div style={{flex:1}}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="subtitle1">{item.price}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </div>
            <Button variant="contained" onClick={() => handleAddItemClick(item)}>Add</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItemContent;
