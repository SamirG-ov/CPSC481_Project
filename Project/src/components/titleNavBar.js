import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const TitleNavBar = ({ title }) => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "fixed",
          left: "0",
        }}
      >
        <button
          style={{
            color: "black",
            border: "none",
            borderRadius: "100px",
            cursor: "pointer",
            fontSize: "30px",
          }}
          type="button"
          onClick={() => window.history.back()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div className="logo">
        <h1 style={{ fontSize: "40px", margin: "20px 0px 5px 0px" }}>
          <span style={{ color: "red" }}>X</span>
          <span style={{ color: "blue" }}>Y</span>
          <span style={{ color: "green" }}>Z</span> Bistro
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "2px 0px 5px 0px",
            fontWeight: "bold",
          }}
        >
          Since 2015
        </p>
      </div>

      <h1 className="title">{title}</h1>
    </header>
  );
};

export default TitleNavBar;
