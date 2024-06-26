import React from "react";
import { Link } from "react-router-dom";
import "../styles/welcome.css";
import NavBar from "../components/navBar";

const Welcome = () => {
  const currentHour = new Date().getHours();
  let meal;
  let time;

  // Determine the meal time based on the current hour
  if (currentHour < 10 || currentHour >= 22) {
    meal = "Closed";
    time = "10:00 pm — 10:00 am";
  } else if (currentHour < 16) {
    meal = "Lunch";
    time = "10:00 am — 4:00 pm";
  } else {
    meal = "Dinner";
    time = "6:00 pm — 10:00 pm";
  }

  // Reset the order placed flag
  window.isOrderPlaced = false;

  return (
    <>
      <div className="welcome-page">
        <NavBar />
        <div>
          <div className="line long" />
          <div className="welcome">
            <h1>
              Welcome to <br />
              <span style={{ color: "red" }}>X</span>
              <span style={{ color: "blue" }}>Y</span>
              <span style={{ color: "green" }}>Z</span> Bistro
            </h1>
          </div>
          <p className="p2">
            Step into a world of culinary delight as you explore our menu
            crafted with passion and tradition. Whether you're craving a classic
            favorite or eager to discover something new, let us take you on a
            journey through the rich and diverse flavors of Italy.{" "}
            <strong>Buon appetito!</strong>
          </p>
          <div className="line small" />
        </div>
        <div className="buttons">
        <Link to="/menu?tab=3">
            <button type="button" className="button">
              SHOW ME RECOMMENDATIONS!
            </button>
          </Link>
          <Link to="/menu">
            <button type="button" className="button">
              ACCESS MENU!
            </button>
          </Link>
          <Link to="/assistance">
            <button
              type="button"
              className="button"
              style={{ backgroundColor: "darkorange" }}
            >
              CALL FOR ASSISTANCE
            </button>
          </Link>
        </div>
        <div className="current-time">
          <h1 className="meal">{meal}</h1>
          <h1 className="time">{time}</h1>
        </div>
      </div>
    </>
  );
};

export default Welcome;
