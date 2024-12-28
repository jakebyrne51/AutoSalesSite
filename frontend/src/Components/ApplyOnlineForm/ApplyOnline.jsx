import React, { useState } from 'react';
import Navbar from '../NavBar/Navbar';
import './ApplyOnline.css';

const ApplyOnline = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        socialSecurity: '',
        dateOfBirth: '',
        driversLicenseNumber: '',
        driversLicenseState: '',
        driversLicenseExp: '',
        mobilePhone: '',
        homePhone: '',
        timeAtResidenceYears: '',
        timeAtResidenceMonths: '',
        residenceType: '',
        rentMortgage: '',
        employer: '',
        employerType: '',
        monthlyIncome: '',
        occupation: '',
        employerAddress1: '',
        employerAddress2: '',
        employerCity: '',
        employerState: '',
        employerZip: '',
        workPhone: '',
        timeOnJobYears: '',
        timeOnJobMonths: '',
        coBuyer: '',
        vehicleToFinance: '',
        stockNumber: '',
        carYear: '',
        carMake: '',
        carModel: '',
        carTrim: '',
        carVin: '',
        carMileage: '',
        additionalComments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="apply-online-page">
            <Navbar />
            <div className="spacer"></div> {/* Spacer element */}
            <div className="container">
                <h1>Credit Application</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Zip:</label>
                        <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="socialSecurity">Social Security:</label>
                        <input type="text" id="socialSecurity" name="socialSecurity" value={formData.socialSecurity} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="driversLicenseNumber">Drivers License Number:</label>
                        <input type="text" id="driversLicenseNumber" name="driversLicenseNumber" value={formData.driversLicenseNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="driversLicenseState">Drivers License State:</label>
                        <input type="text" id="driversLicenseState" name="driversLicenseState" value={formData.driversLicenseState} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="driversLicenseExp">Drivers License Exp:</label>
                        <input type="date" id="driversLicenseExp" name="driversLicenseExp" value={formData.driversLicenseExp} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobilePhone">Mobile Phone:</label>
                        <input type="tel" id="mobilePhone" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homePhone">Home Phone:</label>
                        <input type="tel" id="homePhone" name="homePhone" value={formData.homePhone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeAtResidenceYears">Time at Residence (Years):</label>
                        <input type="number" id="timeAtResidenceYears" name="timeAtResidenceYears" value={formData.timeAtResidenceYears} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeAtResidenceMonths">Time at Residence (Months):</label>
                        <input type="number" id="timeAtResidenceMonths" name="timeAtResidenceMonths" value={formData.timeAtResidenceMonths} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="residenceType">Residence Type:</label>
                        <input type="text" id="residenceType" name="residenceType" value={formData.residenceType} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rentMortgage">Rent/Mortgage:</label>
                        <input type="text" id="rentMortgage" name="rentMortgage" value={formData.rentMortgage} onChange={handleChange} required />
                    </div>
                    <h2>Applicant Employment Information</h2>
                    <div className="form-group">
                        <label htmlFor="employer">Employer:</label>
                        <input type="text" id="employer" name="employer" value={formData.employer} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerType">Employer Type:</label>
                        <input type="text" id="employerType" name="employerType" value={formData.employerType} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="monthlyIncome">Monthly Income:</label>
                        <input type="number" id="monthlyIncome" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation:</label>
                        <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerAddress1">Employer Address 1:</label>
                        <input type="text" id="employerAddress1" name="employerAddress1" value={formData.employerAddress1} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerAddress2">Employer Address 2:</label>
                        <input type="text" id="employerAddress2" name="employerAddress2" value={formData.employerAddress2} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerCity">Employer City:</label>
                        <input type="text" id="employerCity" name="employerCity" value={formData.employerCity} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerState">Employer State:</label>
                        <input type="text" id="employerState" name="employerState" value={formData.employerState} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employerZip">Employer Zip:</label>
                        <input type="text" id="employerZip" name="employerZip" value={formData.employerZip} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="workPhone">Work Phone:</label>
                        <input type="tel" id="workPhone" name="workPhone" value={formData.workPhone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeOnJobYears">Time on Job (Years):</label>
                        <input type="number" id="timeOnJobYears" name="timeOnJobYears" value={formData.timeOnJobYears} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeOnJobMonths">Time on Job (Months):</label>
                        <input type="number" id="timeOnJobMonths" name="timeOnJobMonths" value={formData.timeOnJobMonths} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coBuyer">Do you have a co-buyer?</label>
                        <input type="text" id="coBuyer" name="coBuyer" value={formData.coBuyer} onChange={handleChange} required />
                    </div>
                    <h2>Vehicle Information</h2>
                    <div className="form-group">
                        <label htmlFor="vehicleToFinance">Vehicle To Finance:</label>
                        <input type="text" id="vehicleToFinance" name="vehicleToFinance" value={formData.vehicleToFinance} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stockNumber">Stock Number:</label>
                        <input type="text" id="stockNumber" name="stockNumber" value={formData.stockNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carYear">Year:</label>
                        <input type="number" id="carYear" name="carYear" value={formData.carYear} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carMake">Make:</label>
                        <input type="text" id="carMake" name="carMake" value={formData.carMake} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carModel">Model:</label>
                        <input type="text" id="carModel" name="carModel" value={formData.carModel} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carTrim">Trim:</label>
                        <input type="text" id="carTrim" name="carTrim" value={formData.carTrim} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carVin">Vin:</label>
                        <input type="text" id="carVin" name="carVin" value={formData.carVin} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="carMileage">Mileage:</label>
                        <input type="number" id="carMileage" name="carMileage" value={formData.carMileage} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="additionalComments">Additional Comments:</label>
                        <textarea id="additionalComments" name="additionalComments" rows="4" value={formData.additionalComments} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ApplyOnline;