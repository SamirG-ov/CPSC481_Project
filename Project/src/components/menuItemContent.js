import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();
  const [showPopupItem, setShowPopupItem] = useState(null); // State to track the item for which the popup should be displayed

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const PopupNotification = ({ item }) => {
    const popupStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      width: '70%', // Adjusted width
      maxWidth: '500px', // Added max-width
    };

    const imageStyle = {
      width: '50%', // Adjusted width
      height: 'auto',
      marginBottom: '10px'
    };

    const textContainerStyle = {
      width: '50%', // Adjusted width
      textAlign: 'left', // Align text to the left
      padding: '0 20px' // Added padding for spacing
    };

    const handleClose = () => {
      setShowPopupItem(null); // Close the popup by setting showPopupItem to null
    };

    return (
      <div style={popupStyle}>
        <button style={{ position: 'absolute', boxShadow: '0px 0px 2px 2px rgb(0,0,0)', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#333' }} onClick={handleClose}>X</button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={item.image} alt="Notification" style={imageStyle} />
          <div style={textContainerStyle}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="subtitle1">{item.price}</Typography>
            <Typography variant="body2">{item.description2}</Typography>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h5">{category}</Typography>
      <ul style={{ listStylePosition: 'inside', paddingInlineStart: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} onClick={() => setShowPopupItem(item)}>
            {item.image && <img src={item.image} alt={item.name} style={{ marginRight: '10px', width: '100px', height: '100px', objectFit: 'cover' }} />}
            <div style={{ flex: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="subtitle1">{item.price}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </div>
            <Button variant="contained" onClick={() => handleAddItemClick(item)}>Add</Button> {/* Set showPopupItem to the current item */}
          </li>
        ))}
      </ul>
      {showPopupItem && <PopupNotification item={showPopupItem} />} {/* Render PopupNotification only if showPopupItem is not null */}
    </div>
  );
};

export default MenuItemContent;