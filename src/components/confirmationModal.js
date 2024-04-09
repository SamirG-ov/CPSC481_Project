import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function Modal({ title, message, onConfirm, onDismiss }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          borderColor: "green",
        }}
      >
        <button
          type="button"
          onClick={onDismiss}
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "transparent",
            border: "none",
            fontSize: "1.5em",
            color: "gray",
          }}
        >
          <FontAwesomeIcon icon={faXmarkCircle} />
        </button>
        <h2>{title}</h2>
        <p style={{ fontSize: "20px", width: "500px" }}>{message}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            className="view-cart"
            style={{
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={onDismiss}
          >
            Dismiss
          </button>
          <button
            type="button"
            className="view-cart"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
