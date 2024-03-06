import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import Welcome from "./pages/welcome";
import Assistance from "./pages/assistance";
import Menu from "./pages/menu";
import ItemPage from "./pages/ItemPage";
import OrderCart from "./pages/orderCart";
import TrackOrder from "./pages/trackOrder";
import Payment from "./pages/payment";
import Feedback from "./pages/feedback";
import PayBill from "./pages/payBill";
import FloatingButton from "./components/floatingButton";
import AssistanceButton from "./components/assistanceButton";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/assistance" element={<Assistance />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/item/:itemName" element={<ItemPage />} />
          <Route path="/orderCart" element={<OrderCart />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/payBill" element={<PayBill />} />
        </Routes>
        <footer style={{ position: "fixed", bottom: "0", width: "100%" }}>
          <FloatingButton />
          <AssistanceButton />
        </footer>
      </Router>
    </div>
  );
}

export default App;
