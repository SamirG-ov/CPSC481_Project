import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSeedling,
  faBreadSlice,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const MenuItemContent = ({ category, items }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filteredItems, setFilteredItems] = useState(items); // State to store filtered items

  useEffect(() => {
    // Filter items based on search term
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handleAddItemClick = (item) => {
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getIconForTag = (tag) => {
    switch (tag) {
      case "Vegetarian":
        return faSeedling;
      case "Gluten Free":
        return faBreadSlice;
      case "Dairy Free":
        return faCheese;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="search">
        <h2>{category}</h2>
        <div
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <span className="tag">
              <FontAwesomeIcon icon={getIconForTag("Vegetarian")} />
            </span>
            Vegetarian
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <span className="tag">
              <FontAwesomeIcon icon={getIconForTag("Gluten Free")} />
            </span>
            Gluten Free
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <span className="tag">
              <FontAwesomeIcon icon={getIconForTag("Dairy Free")} />
            </span>
            Dairy Free
          </div>
        </div>
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

      {filteredItems.map((item) => (
        <div key={item.name} className={item.className}>
          <div style={{ margin: "20px" }}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className="menu-item-details">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "25px",
                  color: "#148014",
                  margin: "10px 0px",
                  paddingRight: "5px",
                }}
              >
                {item.name}
              </h3>
              {item.tags?.map((tag) => {
                const icon = getIconForTag(tag);
                return (
                  <span className="tag" key={tag}>
                    {icon && <FontAwesomeIcon icon={icon} />}
                  </span>
                );
              })}
            </div>
            {item.rating > 0 && (
              <div>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < item.rating ? "star-filled" : "star-empty"}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            )}
            <p style={{ margin: "0px", fontSize: "20px" }}>
              {item.description}
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price}.00
              </p>
            </div>
          </div>
          <div
            style={{
              height:
                category === "Chef Specials" || category === "Secret Menu"
                  ? "26vh"
                  : "24vh",
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
