import React, { useState } from 'react';
import '/Users/jakebyrne/AutoSalesSite/carShop/AutoSalesSite/frontend/src/Components/Loan Calculator/LoanCalculator.css';

const LoanCalc = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculatePayment = () => {
        if (!loanAmount || !downPayment || !interestRate || !loanTerm) {
            alert('Please fill out all fields!');
            return;
        }

        const principal = parseFloat(loanAmount) - parseFloat(downPayment); // Subtract down payment from loan amount
        const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
        const numberOfPayments = parseInt(loanTerm) * 12;

        if (principal <= 0) {
            alert('Down payment must be less than the loan amount!');
            return;
        }

        // Monthly Payment Formula: M = P[r(1+r)^n] / [(1+r)^n - 1]
        const monthly =
            (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        setMonthlyPayment(monthly.toFixed(2));
    };

    return (
        <div className="loan-calculator-container">
            <div className="loan-calculator">
                <h2>Loan Calculator</h2>
                <div className="form-group">
                    <label htmlFor="loan-amount">Loan Amount</label>
                    <input
                        type="number"
                        id="loan-amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        placeholder="Enter loan amount"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="down-payment">Down Payment</label>
                    <input
                        type="number"
                        id="down-payment"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        placeholder="Enter down payment"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="interest-rate">Interest Rate (%)</label>
                    <input
                        type="number"
                        id="interest-rate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        placeholder="Enter interest rate"
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="loan-term">Loan Term (Years)</label>
                    <input
                        type="number"
                        id="loan-term"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        placeholder="Enter loan term in years"
                        required
                    />
                </div>
                <button onClick={calculatePayment} className="btn-calculate">
                    Calculate
                </button>
                {monthlyPayment !== null && (
                    <div className="result">
                        <h3>Monthly Payment</h3>
                        <p>${monthlyPayment}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoanCalc;
