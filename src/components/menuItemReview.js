import React, { useState } from "react";

const Star = ({ selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: selected ? "gold" : "gray",
        fontSize: "60px", // Adjust the size of the stars
      }}
    >
      ★
    </span>
  );
};

const MenuItemReview = ({ category, items }) => {
  const [filteredItems] = useState(items);
  const [ratings, setRatings] = useState({});

  // Function to handle the click on a star
  const handleStarClick = (item, selectedRating) => {
    setRatings({ ...ratings, [item.name]: selectedRating });
  };
  return (
    <div>
      {filteredItems.map((item) => (
        <div key={item.name} className={item.className}>
          <div style={{ margin: "20px" }}>
            <img src={item.image} alt={item.name} />
          </div>
          <div
            className="menu-item-details"
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            <div>
              <h3
                style={{
                  fontSize: "25px",
                  color: "#148014",
                  margin: "10px 0px",
                }}
              >
                {item.name}
              </h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {item.price}.00
                </p>
              </div>
            </div>
            {/* Render stars */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  selected={ratings[item.name] >= index + 1}
                  onClick={() => handleStarClick(item, index + 1)}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              height: "23vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuItemReview;
