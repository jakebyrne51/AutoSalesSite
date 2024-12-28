import React from 'react';
import Navbar from '/Users/jakebyrne/carShop/frontend/src/Components/NavBar/Navbar.jsx';
import TradeInVal from '/Users/jakebyrne/carShop/frontend/src/Components/TradeInForm/tradeinval.jsx';
import '/Users/jakebyrne/carShop/frontend/src/Components/TradeInForm/tradeinval.css';

const TradeInValPage = () => {
    return (
        <div className="tradein-page-container">
            <Navbar />
            <TradeInVal />
        </div>
    );
};

export default TradeInValPage;