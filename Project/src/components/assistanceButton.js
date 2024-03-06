import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AssistanceButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllPages = location.pathname !== "/assistance";

  const handleClick = () => {
    navigate("/assistance");
  };

  return isAllPages ? (
    <button type="button" className="view-cart assistance-button" onClick={() => handleClick()}>
      Call Assistance
    </button>
  ) : null;
};

export default AssistanceButton;
