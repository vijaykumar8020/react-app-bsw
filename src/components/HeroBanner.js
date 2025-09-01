import React from "react";

const HeroBanner = () => {
  console.log("✅ Remote Hero Banner rendered");
  return (
    <div
        style={{
          padding: "20px",
          background: "white",
          border: "1px solid blue",
          color: "green",
          borderRadius: "8px",
          maxWidth: "1200px"
        }}
      >
        <h1>Remote Hero Banner Component</h1>
        <p>This is a remotely loaded Hero Banner.</p>
      </div>
  );
};

export default HeroBanner;
