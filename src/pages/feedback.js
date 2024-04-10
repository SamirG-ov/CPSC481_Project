import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "../components/navBar";
import Modal from "../components/confirmationModal";
import LasagnaImg from "../assets/lasagna.jpg";
import ParmChicken from "../assets/parmChicken.jpg";
import MenuItemReview from "../components/menuItemReview";

const Feedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  const [showModal, setShowModal] = useState(false); // State to show the modal
  const [nestedValue] = React.useState(0); // State to store the nested tab value

  // Function to handle the form submission
  const handleSubmit = (event) => {
    setShowModal(true);
    event.preventDefault();
  };

  // Function to handle the close event of the modal
  const handleCloseModal = () => {
    setShowModal(false);
    // Redirect to the home page if not on the menu page
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

  return (
    <div>
      <div style={{ paddingBottom: "20px" }}>
        <NavBar />
      </div>
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto 0",
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
              Please rate all the dishes:
            </label>
            <CustomTabPanel value={nestedValue} index={0}>
              <MenuItemReview
                category="Specials"
                items={[
                  {
                    name: "Lasagna",
                    price: "$12",
                    className: "menu-item",
                    image: LasagnaImg,
                    description:
                      "Layers of pasta, seasoned ground beef, Italian sausage, fresh vegetables, Bolognese sauce, béchamel, topped with melted mozzarella and Parmesan.",
                  },
                  {
                    name: "Chicken Parmesan",
                    price: "$16",
                    className: "menu-item",
                    image: ParmChicken,
                    description:
                      "Breaded chicken breast topped with marinara sauce and melted mozzarella cheese. Served with a side of spaghetti.",
                  },
                ]}
              />
            </CustomTabPanel>
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
