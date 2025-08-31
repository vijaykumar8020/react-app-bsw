import React from "react";

const Card = () => {
  console.log("✅ Remote Card rendered");
  return (
    <button
      style={{ padding: "10px", background: "blue", color: "white" }}
    >
      Card Component
    </button>
  );
};

export default Card;
