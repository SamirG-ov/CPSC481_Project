import React, { useState } from "react";
import NavBar from "../components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/confirmationModal";

const Assistance = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCancelClick = () => {
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    window.history.back();
  };

  const handleDismissModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavBar />
      <div
        style={{
          backgroundColor: "green",
          width: "400px",
          height: "200px",
          marginTop: "75px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Assistance Required
        </h1>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "60px",
            textDecoration: "underline green",
          }}
        >
          Someone will be with you shortly!
        </h1>
      </div>
      <footer
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          className="view-cart"
          style={{
            marginTop: "50px",
            backgroundColor: "red",
            width: "280px",
            justifyContent: "space-evenly",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleCancelClick}
        >
          <FontAwesomeIcon icon={faTimes} /> CANCEL REQUEST{" "}
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </footer>

      {showModal && (
        <Modal
          title="Confirm Request Cancellation"
          message="Are you sure you want to cancel the request for assistance?"
          onConfirm={handleConfirmCancel}
          onDismiss={handleDismissModal}
        />
      )}
    </div>
  );
};

export default Assistance;
