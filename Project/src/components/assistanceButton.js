import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AssistanceButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isNotAssistancePage = location.pathname !== "/assistance";
  const isNotWelcomePage = location.pathname !== "/";

  const handleClick = () => {
    navigate("/assistance");
  };

  return isNotAssistancePage && isNotWelcomePage ? (
    <button
      type="button"
      className="view-cart assistance-button"
      onClick={() => handleClick()}
    >
      Call Assistance
    </button>
  ) : null;
};

export default AssistanceButton;
