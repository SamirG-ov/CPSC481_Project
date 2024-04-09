import React from "react";
import { useLocation } from "react-router-dom";
import FloatingButton from "./floatingButton";
import AssistanceButton from "./assistanceButton";

function Footer() {
  const location = useLocation();
  const isItemPage = location.pathname.includes("/item/");

  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: "space-between",
        width: isItemPage ? "auto" : "100%",
      }}
    >
      <AssistanceButton />
      <FloatingButton />
    </footer>
  );
}

export default Footer;
