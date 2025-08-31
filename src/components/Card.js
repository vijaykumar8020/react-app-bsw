import React from "react";

const Card = () => {
  console.log("✅ Remote Card rendered");
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0" }}>Card Title</h2>
      <p style={{ margin: "0 0 16px 0", color: "#555" }}>Card Description</p>
      <button
        style={{
          padding: "10px 16px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Card Cta
      </button>
    </div>
  );
};

export default Card;
