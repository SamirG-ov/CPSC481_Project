import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/payBill.css";
import TitleNavBar from "../components/titleNavBar";
import MasterCardIcon  from '../assets/mc.png';
import VisaIcon from '../assets/visa.png';


const PayBill = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <TitleNavBar title="Pay Bill" />
      <div style={{ "font-weight": "bold", "fontSize": "40px" }} className="text-holder">
        Accepted Forms of Payment
      </div>
      <div className="button-holder">
        <button class="pay-button2" onClick={() => navigate("/tipOptions")}>
          <img src={MasterCardIcon} alt="Visa Icon" style={{ width: '150px', height: '50px' }} />
        </button>
        <button class="pay-button2" onClick={() => navigate("/tipOptions")}>
          <img src={VisaIcon} alt="Visa Icon" style={{ width: '70px', height: '30px' }} />
        </button>
      </div>
      <div className="button-holder">
        <button class="pay-button2" onClick={() => navigate("/tipOptions")}>
          Debit
        </button>
        <button class="pay-button2" onClick={() => navigate("/cashPay")}>
          Cash
        </button>
      </div>
      <div class="button-holder" onClick={() => navigate("/tipOptions")}>
        <button class="pay-button2">Gift Card</button>
      </div>
    </div>
  );
};

export default PayBill;
