import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItemQuantity from "./menuItemQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState(""); //TODO: Add state to store the search term

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // TODO: Implement logic to add item to cart
  const handleQuantityChange = (newQuantity) => {};

  return (
    <div>
      <div className="search">
        <h2>{category}</h2>
        <div style={{ position: "relative" }}>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ paddingLeft: "30px", width: "300px", height: "40px" }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#148014",
            }}
          />
        </div>
      </div>

      {items.map((item) => (
        <div key={item.name} className={item.className}>
          <div style={{ margin: "20px" }}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className="menu-item-details">
            <h3
              style={{
                fontSize: "25px",
                color: "#148014",
                margin: "10px 0px",
              }}
            >
              {item.name}
            </h3>
            {item.rating > 0 &&
            <div>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < item.rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
              ))}
            </div>
            } 
            <p style={{ margin: "0px", fontSize: "20px" }}>
              {item.description}
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price}.00
              </p>
              <MenuItemQuantity
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            </div>
          </div>
          <div
            style={{
              height: "23vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
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
    </div>
  );
};
export default MenuItemContent;
