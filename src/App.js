import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Assistance from "./pages/assistance";
import Menu from "./pages/menu";
import ItemPage from "./pages/ItemPage";
import OrderCart from "./pages/orderCart";
import TrackOrder from "./pages/trackOrder";
import Payment from "./pages/payment";
import Feedback from "./pages/feedback";
import PayBill from "./pages/payBill";
import TipOptions from "./pages/tipOptions";
import CashPay from "./pages/cashPay";
import CardPay from "./pages/cardPay";
import PaymentComplete from "./pages/paymentComplete";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "60px" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/assistance" element={<Assistance />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/item/:itemName" element={<ItemPage />} />
          <Route path="/orderCart" element={<OrderCart />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/payBill" element={<PayBill />} />
          <Route path="/tipOptions" element={<TipOptions />} />
          <Route path="/cashPay" element={<CashPay />} />
          <Route path="/cardPay" element={<CardPay />} />
          <Route path="/paymentComplete" element={<PaymentComplete />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
