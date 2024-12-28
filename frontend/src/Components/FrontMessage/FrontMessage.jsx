import React from 'react';
import { Link } from "react-router-dom";
import './FrontMessage.css';

const FrontMessage = () => {
    return (
        <div className="front-message-container">
            <div className="overlay"></div>
            <div className="content">
                <h1>Discover Your Next Ride</h1>
                <p>Find the perfect vehicle for you at Treen & Byrne Auto Sales</p>
                <div className="button-group">
                    <Link to="/inventory">Inventory</Link>
                </div>
            </div>
        </div>
    );
};

export default FrontMessage;
