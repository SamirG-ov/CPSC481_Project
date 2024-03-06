import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Add your search logic here
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
          <div key={item.name} className={item.className} style={item.style}>
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
      </div>
    </div>
  );
};

export default MenuItemContent;
