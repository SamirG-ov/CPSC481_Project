import React from "react";
import NavBar from "../components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Assistance = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "#CD5C5C",
          width: "400px",
          height: "200px",
          marginTop: "75px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Assistance Required
        </p>
      </div>
      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          Someone will be with you shortly!
        </p>
      </div>
      <footer style={{ textAlign: "center", paddingBottom: "20px" }}>
        <button
          type="button"
          style={{
            padding: "20px 30px",
            fontSize: "16px",
            marginTop: "150px",
            backgroundColor: "#FFFF8F",
            color: "red",
          }}
          onClick={() => window.history.back()}
        >
          <FontAwesomeIcon icon={faTimes} /> CANCEL REQUEST{" "}
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </footer>
    </div>
  );
};

export default Assistance;
