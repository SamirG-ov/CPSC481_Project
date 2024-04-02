import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
      className="view-cart"
      style={{ width: "170px", backgroundColor: "darkorange" }}
      onClick={() => handleClick()}
    >
      <FontAwesomeIcon icon={faPhone} />
      Call Assistance
    </button>
  ) : null;
};

export default AssistanceButton;
