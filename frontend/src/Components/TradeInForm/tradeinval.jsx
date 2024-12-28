import React, { useState } from "react";
import "/Users/jakebyrne/AutoSalesSite/carShop/AutoSalesSite/frontend/src/Components/TradeInForm/tradeinval.css";

const TradeInVal = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobilePhone: "",
        homePhone: "",
        email: "",
        vehicleOfInterest: "",
        vin: "",
        year: "",
        make: "",
        model: "",
        trim: "",
        cylinders: "",
        transmission: "",
        mileage: "",
        color: "",
        financed: "",
        financeWithWhom: "",
        payoffAmount: "",
        wrecked: "",
        vehicleOptions: [],
        vehicleDescription: "",
        acknowledgment: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "vehicleOptions") {
            setFormData((prevState) => ({
                ...prevState,
                vehicleOptions: checked
                    ? [...prevState.vehicleOptions, value]
                    : prevState.vehicleOptions.filter((option) => option !== value),
            }));
        } else if (type === "checkbox") {
            setFormData((prevState) => ({ ...prevState, [name]: checked }));
        } else {
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="tradeinval-container">
            <h2 className="tradein-header">TRADE IN YOUR VEHICLE AT TREEN AND BYRNE AUTO SALES, INC.</h2>
            <form className="tradeinval-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Mobile Phone:</label>
                        <input type="tel" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Home Phone:</label>
                        <input type="tel" name="homePhone" value={formData.homePhone} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Vehicle of Interest:</label>
                    <input type="text" name="vehicleOfInterest" value={formData.vehicleOfInterest} onChange={handleChange} />
                </div>

                <h3>Enter Vehicle Information:</h3>
                <div className="form-row">
                    <div className="form-group">
                        <label>VIN:</label>
                        <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="number" name="year" value={formData.year} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Make:</label>
                        <input type="text" name="make" value={formData.make} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Model:</label>
                        <input type="text" name="model" value={formData.model} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Trim:</label>
                        <input type="text" name="trim" value={formData.trim} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mileage:</label>
                        <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Color:</label>
                        <input type="text" name="color" value={formData.color} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Transmission:</label>
                        <input type="text" name="transmission" value={formData.transmission} onChange={handleChange} />
                    </div>
                </div>

                <h3>Vehicle Options:</h3>
                <div className="checkbox-grid">
                    {[
                        "4X4",
                        "Airconditioned Seats",
                        "AM/FM",
                        "Back Up Sonar",
                        "Bucket Seats",
                        "Convertible Top",
                        "Driver Airbag",
                        "Heated Seats",
                        "Luggage Rack",
                        "Passenger Airbag",
                        "Power Mirrors",
                        "Power Windows",
                        "Rear Defroster",
                        "Satellite Radio",
                        "Third Row Seat",
                        "Tool Box",
                        "TV/DVD",
                        "Adjustable Pedals",
                        "Air Conditioning",
                        "Alarm System",
                        "Alloy Wheels",
                        "Anti-Lock Brakes",
                        "Auto Climate Control",
                        "Bed Cover",
                        "Bedliner",
                        "CD",
                        "CD Changer",
                        "Cruise Control",
                        "Diesel",
                        "Extra Cab",
                        "Fog Lights",
                        "Keyless Entry",
                        "Leather Seats",
                        "Memory Seats",
                        "Navigation",
                        "Power Doors",
                        "Power Locks",
                        "Power Seats",
                        "Power Tailgate",
                        "Quad Seats",
                        "Rear Air",
                        "Rear Spoiler",
                        "Running Boards",
                        "Side Airbags",
                        "Sun Roof",
                        "Tilt Wheel",
                        "Tinted Windows",
                        "Tow Package",
                        "Traction Control",
                        "Woodgrain"
                    ].map((option, index) => (
                        <label key={index} className="checkbox-item">
                            <input
                                type="checkbox"
                                name="vehicleOptions"
                                value={option}
                                checked={formData.vehicleOptions.includes(option)}
                                onChange={handleChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>

                <div className="form-group">
                    <label>Vehicle Description and Comments:</label>
                    <textarea
                        name="vehicleDescription"
                        value={formData.vehicleDescription}
                        onChange={handleChange}
                        rows="5"
                    ></textarea>
                </div>

                <div className="form-group acknowledgment">
                    <label>
                        <input
                            type="checkbox"
                            name="acknowledgment"
                            checked={formData.acknowledgment}
                            onChange={handleChange}
                        />
                        <strong> ACKNOWLEDGMENT AND CONSENT:</strong>
                        <p>
                            I hereby consent to receive text messages or phone calls from or on behalf of the
                            dealer or their employees to the mobile phone number I provided above. By opting in,
                            I understand that message and data rates may apply. This acknowledgment constitutes
                            my written consent to receive text messages to my cell phone and phone calls,
                            including communications sent using an auto-dialer or pre-recorded message. You may
                            withdraw your consent at any time by texting "STOP."
                        </p>
                    </label>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>


    );
};

export default TradeInVal;
