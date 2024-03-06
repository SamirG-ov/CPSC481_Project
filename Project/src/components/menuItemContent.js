import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showPopupItem, setShowPopupItem] = React.useState(null); // State to track the item for which the popup should be displayed

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Add your search logic here
  };

  // return (
  // <div>
  //   <div>
  //     <div className="search">
  //       <h2>{category}</h2>
  //       <input
  //         type="search"
  //         placeholder="Search"
  //         value={searchTerm}
  //         onChange={handleSearchChange}
  //       />
  //     </div>

  //     {items.map((item) => (
  //       <div key={item.name} className={item.className} style={item.style}>
  //         <div>
  //           <img src={item.image} alt={item.name} />
  //         </div>
  //         <div className="menu-item-details">
  //           <h3 style={{ color: "#32cd32" }}>{item.name}</h3>
  //           <p>{item.description}</p>
  //           <p>{item.price}.00</p>
  //         </div>
  //         <div className="add-to-cart">
  //           <button
  //             type="button"
  //             className="add-to-cart-button"
  //             onClick={() => handleAddItemClick(item)}
  //           >
  //             Add to Cart
  //           </button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  // );

  const PopupNotification = ({ item }) => {
    const popupStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      textAlign: "center",
      width: "70%", // Adjusted width
      maxWidth: "500px", // Added max-width
    };

    const imageStyle = {
      width: "50%", // Adjusted width
      height: "auto",
      marginBottom: "10px",
    };

    const textContainerStyle = {
      width: "50%", // Adjusted width
      textAlign: "left", // Align text to the left
      padding: "0 20px", // Added padding for spacing
    };

    const handleClose = () => {
      setShowPopupItem(null); // Close the popup by setting showPopupItem to null
    };

    return (
      <div style={popupStyle}>
        <button
          type="button" // Add the type prop
          style={{
            position: "absolute",
            boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            color: "#333",
          }}
          onClick={handleClose}
        >
          X
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={item.image} alt="Notification" style={imageStyle} />
          <div style={textContainerStyle}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="subtitle1">{item.price}</Typography>
            <Typography variant="body2">{item.description2}</Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="search">
          <h2>{category}</h2>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {items.map((item) => (
          <div
            key={item.name}
            className={item.className}
            style={item.style}
            onClick={() => setShowPopupItem(item)}
          >
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-details">
              <h3 style={{ color: "#32cd32" }}>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}.00</p>
            </div>
            <div className="add-to-cart">
              <button
                type="button"
                className="add-to-cart-button"
                onClick={() => handleAddItemClick(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {showPopupItem && <PopupNotification item={showPopupItem} />}
      </div>
    </div>
  );
};
export default MenuItemContent;
