import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import * as React from 'react';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuItemContent from "../components/menuItemContent";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback");
    navigate("/welcome");
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <div style={{paddingBottom: "150px"}}>
        {/* <header
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
        </header> */}
      </div>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#F9F9F9",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ textAlign: "center", margin: "0 0 20px" }}>
            Feedback Form
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="feedback"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "1.2em",
              }}
            >
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{
                display: "block",
                width: "95%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
              }}
              rows="5"
              required
            />
            <button
              type="submit"
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                fontSize: "1.2em",
                backgroundColor: "#148014",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
