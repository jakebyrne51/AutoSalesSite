import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/treenandbyrnequalitylogo.png";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => toggleDropdown("financing")}
                    onMouseLeave={() => toggleDropdown(null)}
                >
                    <Link to="#" className="dropdown-toggle">
                        Financing
                    </Link>
                    {openDropdown === "financing" && (
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/apply_online">Credit Application</Link>
                            </li>
                            <li>
                                <Link to="/loan_calculator">Loan Calculator</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/trade_inval">Value Your Trade-In</Link>
                </li>
                <li>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
