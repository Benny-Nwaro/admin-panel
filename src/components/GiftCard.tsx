import React from "react";

const GiftCard: React.FC = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>Gift Card</h2>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "20px" }}>
        Easily fund your Educify wallet by redeeming your gift card. Enter the details below to add the gift card balance to your account.
      </p>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Gift Card Code</label>
          <input type="text" placeholder="Enter your gift card code" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>PIN (If applicable)</label>
          <input type="text" placeholder="Enter the PIN" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Amount</label>
          <input type="number" placeholder="Enter the amount on your gift card" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Email Address</label>
          <input type="email" placeholder="Enter your email address" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Phone Number (Optional)</label>
          <input type="tel" placeholder="Enter your contact number" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
          Redeem
        </button>
      </form>
    </div>
  );
};

export default GiftCard;
