import React from "react";

const BankTransfer = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", backgroundColor: "#F8FAFC", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Bank Transfer</h2>
      <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "20px" }}>
        To fund your wallet, please ensure that you transfer the funds to the following Educify bank account details
      </p>
      <div style={{ backgroundColor: "#E5F4FF", padding: "20px", borderRadius: "8px" }}>
        <div style={{ marginBottom: "10px" }}>
          <strong>Account Holder Name:</strong> Educify Inc.
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Bank Name:</strong> First National Bank
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Bank Account Number:</strong> 9876543210
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>SWIFT/BIC Code:</strong> FNBOUS44
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>IBAN:</strong> US29FNBO12345678901234
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Routing Number:</strong> 111000025
        </div>
        <div>
          <strong>Bank Address:</strong> 1234 Elm Street, Springfield, USA
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
