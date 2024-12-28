import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "/Users/jakebyrne/carShop/frontend/src/Pages/welcome.jsx";
import About from "/Users/jakebyrne/carShop/frontend/src/Pages/aboutus.jsx";
import ApplyOnline from "/Users/jakebyrne/carShop/frontend/src/Pages/apply_online.jsx";
import Contact from "/Users/jakebyrne/carShop/frontend/src/Pages/contact.jsx";
import Inventory from "/Users/jakebyrne/carShop/frontend/src/Pages/inventory.jsx";
import LoanCalculator from "/Users/jakebyrne/carShop/frontend/src/Pages/loan_calculator.jsx";
import PrivacyPolicy from "/Users/jakebyrne/carShop/frontend/src/Pages/privacypolicy.jsx";
import TradeInValue from "/Users/jakebyrne/carShop/frontend/src/Pages/trade_inval.jsx";
import Navbar from "./Components/NavBar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/apply_online" element={<ApplyOnline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/loan_calculator" element={<LoanCalculator />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/trade_inval" element={<TradeInValue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
