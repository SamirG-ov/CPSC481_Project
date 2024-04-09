import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/confirmationModal";

const AssistanceButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isNotAssistancePage = location.pathname !== "/assistance";
  const isNotWelcomePage = location.pathname !== "/";

  const handleAssistanceClick = () => {
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    navigate("/assistance");
  };

  const handleDismissModal = () => {
    setShowModal(false);
  };

  return isNotAssistancePage && isNotWelcomePage ? (
    <div>
      <button
        type="button"
        className="view-cart"
        style={{ width: "180px", backgroundColor: "darkorange" }}
        onClick={handleAssistanceClick}
      >
        <FontAwesomeIcon icon={faPhone} />
        Call Assistance
      </button>

      {showModal && (
        <Modal
          title="Confirm Assistance Request"
          message="Are you sure you want to request for assistance?"
          onConfirm={handleConfirmCancel}
          onDismiss={handleDismissModal}
        />
      )}
    </div>
  ) : null;
};

export default AssistanceButton;
