// src/components/Button.js
import React from "react";

const HeroBanner = () => {
  console.log("✅ Remote Button rendered");
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
        <h1>Hero banner Title</h1>
        <p>Hero Banner Description</p>
      </div>
  );
};

export default HeroBanner;
