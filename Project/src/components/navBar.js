import { useLocation } from "react-router-dom";
import BackButton from "./backButton";

const NavBar = () => {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";
  const isCardPay = location.pathname === "/cardPay";
  const isPaymentComplete = location.pathname === "/paymentComplete";

  return !isMenuPage ? (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
      }}
    >
      {!isCardPay && !isPaymentComplete ? <BackButton pad={"10px"} /> : null}
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
