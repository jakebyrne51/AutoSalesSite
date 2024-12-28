import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./Pages/aboutus.jsx";
import ApplyOnline from "./Pages/apply_online.jsx";
import Contact from "./Pages/contact.jsx";
import Inventory from "./Pages/inventory.jsx";
import LoanCalculator from "./Pages/loan_calculator.jsx";
import PrivacyPolicy from "./Pages/privacypolicy.jsx";
import TradeInValue from "./Pages/trade_inval.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Welcome from "./Pages/welcome.jsx";

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