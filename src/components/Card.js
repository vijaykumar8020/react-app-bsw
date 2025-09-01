const Card = () => {
    console.log("✅ Remote Card rendered");
    return (
      <div
        style={{
          padding: "20px",
          background: "white",
          border: "2px solid blue",
          color: "blue",
          borderRadius: "8px",
          maxWidth: "300px"
        }}
      >
        <h3>Remote Card Component</h3>
        <p>This is a remotely loaded Card.</p>
      </div>
    );
  };
  export default Card;
  