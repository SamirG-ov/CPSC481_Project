import React, { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [assistanceMessage, setAssistanceMessage] = useState("");

  // const handleCallForAssistance = () => {
  //   setAssistanceMessage("Someone is coming to assist you right away");
  // };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <div>
          <h1>
            <span style={{ color: "red" }}>X</span>
            <span style={{ color: "blue" }}>Y</span>
            <span style={{ color: "green" }}>Z</span> Bistro
          </h1>
          <p style={{ textAlign: "center" }}>Since 2015</p>
        </div>
      </header>
      <div style={{ paddingTop: "100px" }}>
        <h1>Welcome!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Link
            to="/menu"
            style={{ marginRight: "20px", textDecoration: "none" }}
          >
            <button
              type="button"
              className="pay-button"
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              I am new here!
            </button>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="pay-button"
              style={{ padding: "10px 20px", fontSize: "16px" }}
            >
              I know my way around!
            </button>
          </Link>
        </div>
        <Link to="/assistance" stlye={{ textDecoration: "none" }}>
          <button
            type="button"
            className="pay-button"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "50px",
            }}
          >
            Call for assistance
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
