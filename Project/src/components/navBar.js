import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  const isWelcomePage = location.pathname === "/";

  return !isMenuPage ? (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      {!isWelcomePage ? (
        <div
          style={{
            position: "fixed",
            left: "0",
            margin: "50px 20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#f2f2f2",
              color: "black",
              border: "1px solid black",
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
      ) : null}
      <div>
        <h1 style={{ fontSize: "50px", margin: "20px 0px 5px 0px" }}>
          <span style={{ color: "red" }}>X</span>
          <span style={{ color: "blue" }}>Y</span>
          <span style={{ color: "green" }}>Z</span> Bistro
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "25px",
            margin: "2px 0px 5px 0px",
            fontWeight: "bold",
          }}
        >
          Since 2015
        </p>
      </div>
    </header>
  ) : null;
};

export default NavBar;
