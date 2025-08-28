// src/components/Button.js
import React from "react";

const Button = () => {
  console.log("✅ Remote Button rendered");
  return (
    <button
      style={{ padding: "10px", background: "blue", color: "white" }}
    >
      Remote Button 1
    </button>
  );
};

export default Button;
