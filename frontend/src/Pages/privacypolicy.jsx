import React from 'react';
import './privacypolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page">
            <div className="privacy-policy">
                <h2>Privacy Policy</h2>
                <div className="policy-content">
                    <p>
                        At Treen & Byrne Auto Sales, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide when visiting our website or interacting with our services.
                    </p>
                    <h3>Information We Collect</h3>
                    <p>
                        We may collect the following types of information:
                    </p>
                    <ul>
                        <li>Personal identification information (e.g., name, email address, phone number)</li>
                        <li>Vehicle information (e.g., VIN, make, model, year)</li>
                        <li>Financial information for financing applications</li>
                        <li>Browser and device data (e.g., IP address, browser type)</li>
                    </ul>
                    <h3>How We Use Your Information</h3>
                    <p>
                        The information we collect may be used for the following purposes:
                    </p>
                    <ul>
                        <li>To process transactions and provide services</li>
                        <li>To improve our website and customer experience</li>
                        <li>To communicate with you regarding inquiries, promotions, or updates</li>
                        <li>To comply with legal and regulatory requirements</li>
                    </ul>
                    <h3>How We Protect Your Information</h3>
                    <p>
                        We implement security measures to safeguard your personal information, including encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    <h3>Your Choices</h3>
                    <p>
                        You have the right to:
                    </p>
                    <ul>
                        <li>Access, update, or delete your personal information</li>
                        <li>Opt out of receiving promotional communications</li>
                        <li>Limit certain types of data collection</li>
                    </ul>
                    <h3>Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p>
                        <strong>Email:</strong> support@treenandbyrneautosales.com
                    </p>
                    <p>
                        <strong>Phone:</strong> (123) 456-7890
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
