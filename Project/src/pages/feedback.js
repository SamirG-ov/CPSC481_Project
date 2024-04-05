import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "../components/navBar";
import Modal from "../components/confirmationModal";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    setShowModal(true);
    event.preventDefault();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (!isMenuPage) {
      navigate("/");
    } else {
      window.location.reload();
    }
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
      <div style={{ paddingBottom: "150px" }}>
        <NavBar />
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
          <h1
            style={{ textAlign: "center", margin: "0 0 20px", color: "green" }}
          >
            Feedback Form
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="feedback"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "20px",
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
                fontSize: "20px",
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
                fontSize: "20px",
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
          {showModal && (
            <Modal
              title="Feedback Submitted"
              message="Thank you for your feedback!"
              onDismiss={handleCloseModal}
              showButtons={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
