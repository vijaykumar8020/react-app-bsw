import React from "react";

const Button = () => {
  console.log("✅ Remote Button rendered");
  return (
    <button
      style={{ padding: "10px", background: "blue", color: "white" }}
    >
      Remote Button Component
    </button>
  );
};

export default Button;
